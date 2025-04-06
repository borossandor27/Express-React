import express from 'express';
import multer from 'multer';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { pool } from './db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'uploads')));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, 'uploads');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'audio/mpeg') cb(null, true);
    else cb(new Error('Csak MP3 fájl engedélyezett.'));
  }
});

app.post('/upload', upload.single('audio'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'Nincs feltöltött fájl.' });

    const { album, comment } = req.body;
    if (!album) return res.status(400).json({ error: 'Kérjük, adja meg az album nevét.' });
    if (!comment) return res.status(400).json({ error: 'Kérjük, adja meg a megjegyzést.' });
    const originalName = req.file.originalname;
    const storedName = req.file.filename;
    const uploadTime = new Date();
    // Ellenőrizzük, hogy a fájl már létezik-e az adatbázisban
    const [existingFile] = await pool.execute(
      'SELECT * FROM zeneszamok WHERE eredeti_fajlnev = ? AND album = ?',
      [originalName, album]
    );
    if (existingFile.length > 0) {
      return res.status(400).json({ error: 'Ez a fájl már létezik az adatbázisban.' });
    }
    
    // Ellenőrizzük, hogy a fájl mérete megfelelő-e
    const fileSize = req.file.size; // fájl mérete byte-ban
    const maxSize = 20 * 1024 * 1024; // 20 MB
    if (fileSize > maxSize) {
      fs.unlinkSync(filePath); // töröljük a fájlt
      return res.status(400).json({ error: 'A fájl mérete meghaladja a 20 MB-ot.' });
    }
    console.log('Feltöltés sikeres:', storedName);
    // Ellenőrizzük, hogy a fájl formátuma megfelelő-e
    const allowedFormats = ['mp3', 'wav', 'ogg'];
    const fileFormat = path.extname(originalName).slice(1).toLowerCase();
    if (!allowedFormats.includes(fileFormat)) {
      fs.unlinkSync(filePath); // töröljük a fájlt
      return res.status(400).json({ error: 'Csak MP3, WAV vagy OGG fájlok engedélyezettek.' });
    }
    // Adatbázisba írás
    const [result] = await pool.execute(
      'INSERT INTO zeneszamok (album, eredeti_fajlnev, megjegyzes, tarolt_fajlnev, feltoltes_idopont) VALUES (?, ?, ?, ?, ?)',
      [album, originalName, comment, storedName, uploadTime]
    );

    res.json({ id: result.insertId, filename: storedName, path: `/uploads/${storedName}` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Hiba a feltöltés során.' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Szerver fut a ${PORT}-es porton`);
});