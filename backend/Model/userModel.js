const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// const validator = require("validator");
const UserSchema = mongoose.Schema({
  userName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});

UserSchema.statics.signup = async function (userName, email, password) {
  // if (!userName || !email || !password) {
  //   throw Error("All fields must be filled");
  // }
  // if (!validator.isEmail(email)) {
  //   throw Error("Email is not valid");
  // }
  // if (!validator.isStrongPassword(password)) {
  //   throw Error("password not strong");
  // }
  // const exists = await this.findOne({ email });
  // if (exists) {
  //   throw Error("Email already in use");
  // }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ userName, email, password: hash });

  return user;
};

UserSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  const User = await this.findOne({ email });
  if (!User) {
    throw Error("Incorrect email");
  }
  const match = await bcrypt.compare(password, User.password);
  if (!match) {
    Error("Incorrect password");
  }
  return user;
};

const user = mongoose.model("user", UserSchema);

module.exports = user;
