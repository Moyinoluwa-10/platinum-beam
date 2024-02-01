const nodemailer = require("nodemailer");
const nodemailerConfig = require("../config/nodemailer");

const sendMail = async (mail) => {
  const transporter = nodemailer.createTransport(nodemailerConfig);
  return transporter.sendMail(mail);
};

module.exports = sendMail;
