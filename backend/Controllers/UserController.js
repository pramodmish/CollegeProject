const userModel = require("../Model/userModel");
const jwtToken = require("../Services/jwtToekn");
const validator = require("validator");
const otpgenerate = require("../Services/generateOtp");
const sendEmail = require("../Services/emailSend");
//user

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.login(email, password);
    const Token = jwtToken.createToken(user.Id);
    res.status(200).json({
      status: true,
      email,
      Token,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error.message,
    });
  }
};

exports.SignupUser = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    if (!userName || !email || !password) {
      return res.status(204).json({
        status: false,
        message: "All fields must be filled",
      });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        status: false,
        message: "Email is not valid",
      });
    }
    if (!validator.isStrongPassword(password)) {
      return res.status(400).json({
        status: false,
        message: "password not strong",
      });
    }
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({
        status: false,
        message: "Email already in use",
      });
    }
    const otp = otpgenerate.generateOTP();

    const user = await userModel.signup(userName, email, password, otp);

    // res.setHeader("Headers", token);

    sendEmail.sendVerifyMail(user.email, otp);
    res.status(201).json({
      status: true,
      message: "user register",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      error: error.message,
    });
  }
};

exports.otpVerify = async (req, res) => {
  const { otp } = req.body;
  try {
    if (!otp) {
      return res.status(204).json({
        status: false,
        message: "bad request",
      });
    }
    const user = await userModel.findOne({ otp: otp });
    if (!user) {
      return res.status(404).json({
        status: false,
        message: "otp expired",
      });
    }
    user.isVerified = true;
    user.otp = undefined;
    await user.save();
    const token = jwtToken.createToken(user._id);
    res.cookie("token", token, { httpOnly: true });
    res.status(201).json({
      status: true,
      message: "user verify successful",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      error: error.message,
    });
  }
};
