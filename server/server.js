const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const ExcelJS = require('exceljs');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Open a database connection
let db = new sqlite3.Database('./mydb.sqlite', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the SQLite database.');
});

function fetchData() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM form_data", [], (err, rows) => {
      if(err) {
        reject(err);
      }
      resolve(rows);
    });
  });
}

async function saveDataToExcel(data) {
  try {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('FormData')

    // Define columns in the Excel sheet
    worksheet.columns = [
      { header: 'ID', key: 'id', width: 10 },
      { header: 'Data', key: 'data', width: 30 },
      // Add more columns as needed
    ];

    // Add rows to the Excel sheet
    data.forEach((row) => {
      worksheet.addRow(row);
    });

    await workbook.xlsx.writeFile('FormData.xlsx');
    console.log('Excel file saved');
  } catch (error) {
    console.error('Failed to save Excel file:', error);
    throw new Error('Failed to save Excel file');
  }
}

// Create table (if it doesn't exist)
db.run(`CREATE TABLE IF NOT EXISTS form_data(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  data TEXT NOT NULL
)`);

app.post('/submit-form', (req, res) => {
  const formData = JSON.stringify(req.body);
  const sql = `INSERT INTO form_data (data) VALUES (?)`;

  db.run(sql, formData, function(err) {
    if (err) {
      console.error(err.message);
      return res.status(500).send('Failed to save form data: ' + err.message);
    }
    console.log(`A row has been inserted with rowid ${this.lastID}`);
    res.status(200).send('Form data saved successfully');
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
// Close the database connection when the application is terminated
process.on('SIGINT', () => {
  db.close(() => {
    console.log('Database connection closed.');
    process.exit(0);
  });
});

fetchData()
  .then(saveDataToExcel)
  .catch(console.error)
  .finally(() => db.close());