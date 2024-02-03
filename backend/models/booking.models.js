const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      enum: {
        values: ["ekiti", "oyo", "lagos", "ogun"],
        message: "{VALUE} is not supported",
      },
      required: true,
    },
    cleaningService: {
      type: String,
      required: true,
    },
    homeType: String,
    homeTypeOther: String,
    commercialType: String,
    commercialTypeOther: String,
    cleaningFrequency: {
      type: String,
      enum: {
        values: ["weekly", "biweekly", "monthly", "once"],
        message: "{VALUE} is not supported",
      },
      default: "weekly",
    },
    cleaningMode: {
      type: String,
      enum: {
        values: ["", "basic", "deep"],
        message: "{VALUE} is not supported",
      },
    },
    noOfBathrooms: Number,
    noOfBedrooms: Number,
    noOfLivingRooms: Number,
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("booking", BookingSchema);
