// Backend server (Node.js with Express.js)
import express from 'express';
import mysql from 'mysql2';

const app = express();

// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'naveenkumar',
  password: 'Naveen2418kumar',
  database: 'empmanagementsystem'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL server');
});

// API endpoint to fetch data
app.get('/api/data', (req, res) => {
  const query = 'SELECT f_userName FROM t_login';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
