const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://moyin:rotimi10@cluster0.gdjqe8o.mongodb.net/platinum-beam?retryWrites=true&w=majority"
);

const formDataSchema = new mongoose.Schema({
  data: String,
});

const FormData = mongoose.model("FormData", formDataSchema);

app.post("/submit-form", async (req, res) => {
  try {
    const formData = new FormData({ data: JSON.stringify(req.body) });
    await formData.save();
    res.status(200).send("Form data saved successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to save form data: " + error.message);
  }
});

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("Database connection closed.");
  process.exit(0);
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
