const nodemailer = require("nodemailer");

exports.sendVerifyMail = async (email, otp) => {
  console.log(email, otp);
  const transportar = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,

    auth: {
      user: process.env.EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: "shubh2062369@gmail.com",
    to: email,
    subject: "Verification For otp From Decorline",
    text: `${otp}`,
  };
  await transportar.sendMail(mailOptions);
};
