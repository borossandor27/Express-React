import express from 'express';
import multer from 'multer';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// __dirname helyettesítése
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'uploads')));

// Feltöltési mappa beállítása
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

// Csak MP3 engedélyezése
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'audio/mpeg') cb(null, true);
    else cb(new Error('Csak MP3 fájl engedélyezett.'));
  }
});

app.post('/upload', upload.single('audio'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'Nincs feltöltött fájl.' });

  res.json({
    filename: req.file.filename,
    path: `/uploads/${req.file.filename}`,
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Szerver fut a ${PORT}-es porton`);
});
