const jwt = require("jsonwebtoken");
const userModel = require("../Controllers/UserController");
exports.protect = async (req, res, next) => {
  const { token } = req.cookies;
  try {
    if (!token) {
      return res.status(401).json({
        message: "login first to access the resources",
      });
    }
    const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (decodedData) {
      req.user = decodedData;
    }
    console.log(req.user);
  } catch (error) {
    res.status(404).json({
      status: false,
      message: error.message,
    });
  }
  next();
};
