const { NODEMAILER_FROM } = require("../config/config");
const sendEmail = require("./sendEmail");

const mail = {
  from: NODEMAILER_FROM,
  to: NODEMAILER_FROM,
  subject: "Booking Confirmation",
};

const sendBookingClientEmail = async ({ data }) => {
  mail.html = `<body>
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
          The booking form was just filled with information. Here are the
          details: <br /><br />
          <b>First Name:</b> ${data.firstName} <br />
          <b>Last Name:</b> ${data.lastName} <br />
          <b>Phone Number:</b> ${data.phoneNumber} <br />
          <b>Email Address:</b> ${data.email} <br />
          <b>House Address:</b> ${data.address} <br />
          <b>City:</b> ${data.city} <br />
          <b>State:</b> ${data.state} <br />
          <b>Cleaning Service:</b> ${data.cleaningService} <br />
          ${data.homeType && `<b>Home Type:</b> ${data.homeType} <br />`}
          ${
            data.homeTypeOther &&
            `<b>Home Type (others):</b> ${data.homeTypeOther} <br />`
          }
          ${
            data.commercialType &&
            `<b>Commercial Type:</b> ${data.commercialType} <br />`
          }
          ${
            data.commercialTypeOther &&
            `<b>Commercial Type (others):</b> ${data.commercialTypeOther}<br />`
          }
          <b>Cleaning Frequency:</b> ${data.cleaningFrequency} <br />
          ${
            data.cleaningMode &&
            `<b>Cleaning Mode:</b> ${data.cleaningMode}<br />`
          } 
          ${
            data.noOfBathrooms &&
            `<b>Number of Bathrooms:</b> ${data.noOfBathrooms} <br />`
          }
          ${
            data.noOfBedrooms &&
            `<b>Number of Bedrooms:</b> ${data.noOfBedrooms} <br />`
          }
          ${
            data.noOfLivingRooms &&
            `<b>Number of Living Rooms:</b>${data.noOfLivingRooms} <br />`
          } 
          <b>Booked Date:</b> ${data.date}<br /><br />

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
              ><img src="https://platinum-beam.vercel.app/instagram.png"
            /></a>
            <a
              href="https://www.facebook.com/profile.php?id=100094608620510"
              style="margin-left: 10px"
              ><img src="https://platinum-beam.vercel.app/facebook.png"
            /></a>
            <a
              href="https://www.linkedin.com/company/platinum-beam-concept-limited/about/"
              style="margin-left: 10px"
              ><img src="https://platinum-beam.vercel.app/linkedIn.png"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>`;
  return sendEmail(mail);
};

module.exports = sendBookingClientEmail;
