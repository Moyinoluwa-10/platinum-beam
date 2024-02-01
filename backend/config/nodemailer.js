const {
  NODEMAILER_HOST,
  NODEMAILER_PORT,
  NODEMAILER_USER,
  NODEMAILER_PASS,
  NODEMAILER_SERVICE,
} = require("./config");

module.exports = {
  service: NODEMAILER_SERVICE,
  host: NODEMAILER_HOST,
  port: NODEMAILER_PORT,
  auth: {
    user: NODEMAILER_USER,
    pass: NODEMAILER_PASS,
  },
};
