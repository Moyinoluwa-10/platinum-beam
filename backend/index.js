require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const xl = require("excel4node");
const wb = new xl.Workbook();
const ws = wb.addWorksheet("Worksheet Name");

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI);

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

const data = [
  {
    name: "Shadab Shaikh",
    email: "shadab@gmail.com",
    mobile: "1234567890",
  },
];
const headingColumnNames = ["Name", "Email", "Mobile"];

app.post("/excel", async (req, res) => {
  //Write Column Title in Excel file
  let headingColumnIndex = 1;
  headingColumnNames.forEach((heading) => {
    ws.cell(1, headingColumnIndex++).string(heading);
  });
  //Write Data in Excel file
  let rowIndex = 2;
  data.forEach((record) => {
    let columnIndex = 1;
    Object.keys(record).forEach((columnName) => {
      ws.cell(rowIndex, columnIndex++).string(record[columnName]);
    });
    rowIndex++;
  });
  wb.write("data.xlsx");
  res.json({ msg: "File saved" });
});

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("Database connection closed.");
  process.exit(0);
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
