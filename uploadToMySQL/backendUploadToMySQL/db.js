import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',         // Állítsd be a saját MySQL felhasználóneved
  password: '',         // Állítsd be a saját jelszavad
  database: 'zeneapp',  // Adatbázis neve
  waitForConnections: true, // Várakozás a kapcsolatokra
  connectionLimit: 10,  // Maximális kapcsolatok száma
  queueLimit: 0        // Nincs korlátozás a várakozó kapcsolatok számára
});