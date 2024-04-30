const jwt = require("jsonwebtoken");

exports.protect = async (req, res) => {
  const { token } = req.cookies;
  console.log();
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
};
