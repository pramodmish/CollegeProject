const jwt = require("jsonwebtoken");
exports.createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET_KEY, { expiresIn: "3d" });
};
