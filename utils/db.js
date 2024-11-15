const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('../qrdb.sqlite', (err) => {
  if (err) {
    console.error('Error opening the database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Create a table (if it doesn't exist)
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS qrdata (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    imgURL TEXT NOT NULL,
    latitude REAL NOT NULL,
    longitude REAL NOT NULL
  )`);
});

module.exports = db;