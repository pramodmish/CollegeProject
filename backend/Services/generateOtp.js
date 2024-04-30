exports.generateOTP = () => {
  const lenght = 6;
  let OTP = "";
  for (let i = 1; i <= lenght; i++) {
    OTP += Math.floor(Math.random() * 10);
  }
  if (Number(String(OTP[0])) == 0) {
    // !giving some error message
    // generateOTP();
  } else {
    return OTP;
  }
};
