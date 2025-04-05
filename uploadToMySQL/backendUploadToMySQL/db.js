import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',         // Állítsd be a saját MySQL felhasználóneved
  password: '',         // Állítsd be a saját jelszavad
  database: 'zeneapp',  // Adatbázis neve
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});