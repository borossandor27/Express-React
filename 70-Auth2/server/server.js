import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Belépés az alkalmazásba az /api/auth útvonalon keresztül.');
});
app.get('/protected', (req, res) => {
  res.send('Ez egy védett útvonal, csak érvényes JWT tokennel érhető el.');
});
app.get( (req, res) => {
  res.status(404).json({ message: 'Az oldal nem található.' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});