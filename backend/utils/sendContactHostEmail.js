const { NODEMAILER_FROM } = require("../config/config");
const sendEmail = require("./sendEmail");

const mail = {
  from: NODEMAILER_FROM,
  to: NODEMAILER_FROM,
  subject: "Contact",
};

const sendBookingClientEmail = async ({ name, email, message }) => {
  mail.html = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Email Templatee</title>
    </head>
    <body>
      <div
        style="
          background-color: #f2f5f8;
          padding: 30px 20px;
          font-family: sans-serif;
        "
      >
        <div style="width: 600px; max-width: 100%; margin: 0 auto">
          <div>
            <img
              src="https://platinum-beam.vercel.app/logo.png"
              alt="logo"
              style="width: 80px; height: 80px"
            />
          </div>
  
          <div
            style="
              border-radius: 4px;
              padding: 25px;
              background: #fff;
              margin-top: 20px;
            "
          >
          <p style="font-size: 16px; color: #333">
          Hello Platinum Beam, <br />
          The contact form was just filled with information. Here are the
          details: <br /><br />
          <b>Name:</b>${name}<br />
          <b>Email Address:</b> ${email} <br />
          <b>Message:</b> ${message} <br /><br />

          Please go ahead and contact the person.
          </p>
          </div>
  
          <div style="margin-top: 40px">
            <p style="font-size: 14px; color: #333">
              Block A2, Plot 12B, Fajuyi Estate, Off Ilawe Road, Ado Ekiti
            </p>
  
            <div
              style="
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 10px;
              "
            >
              <img
                src="https://platinum-beam.vercel.app/logo.png"
                alt="logo"
                style="width: 30px; height: 30px"
              />
  
              <div style="margin-left: auto">
                <a
                  href="https://www.instagram.com/platinumbeamconcept"
                  style="margin-left: 10px"
                  ><img
                    src="https://platinum-beam.vercel.app/instagram.png"
                    alt="instagram-logo"
                /></a>
                <a
                  href="https://www.facebook.com/profile.php?id=100094608620510"
                  style="margin-left: 10px"
                  ><img
                    src="https://platinum-beam.vercel.app/facebook.png"
                    alt="facebook-logo"
                /></a>
                <a
                  href="https://www.linkedin.com/company/platinum-beam-concept-limited/about/"
                  style="margin-left: 10px"
                  ><img
                    src="https://platinum-beam.vercel.app/linkedIn.png"
                    alt="linkedIn-logo"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>`;
  return sendEmail(mail);
};

module.exports = sendBookingClientEmail;
