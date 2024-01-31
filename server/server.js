const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
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
      return res.status(500).send(err.message);
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
