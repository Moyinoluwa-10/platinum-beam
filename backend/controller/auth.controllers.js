const { StatusCodes } = require("http-status-codes");
const Booking = require("../models/booking.models");
const Contact = require("../models/contact.models");
const {
  sendBookingClientEmail,
  sendBookingHostEmail,
  sendContactClientEmail,
  sendContactHostEmail,
} = require("../utils");

const bookService = async (req, res) => {
  const service = await Booking.create(req.body);
  await sendBookingClientEmail({
    email: service.email,
  });
  await sendBookingHostEmail({
    data: service,
  });

  return res.status(StatusCodes.CREATED).json({
    msg: "Service successfully booked",
  });
};

const contactTeam = async (req, res) => {
  const contact = await Contact.create(req.body);
  await sendContactClientEmail({
    email: contact.email,
  });
  await sendContactHostEmail({
    name: contact.name,
    email: contact.email,
    message: contact.message,
  });

  return res.status(StatusCodes.CREATED).json({
    msg: "Contact form submitted successfully",
  });
};

module.exports = {
  bookService,
  contactTeam,
};
