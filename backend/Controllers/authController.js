const jwt = require("jsonwebtoken");
const userModel = require("../Controllers/UserController");
exports.protect = async (req, res) => {
  const { token } = req.cookies;
  try {
    if (!token) {
      return res.status(401).json({
        message: "login first to access the resources",
      });
    }
    const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (decodedData) {
      return res.status(200).json({
        data: decodedData,
      });
    }
  } catch (error) {
    res.status(404).json({
      status: false,
      message: error.message,
    });
  }
};
