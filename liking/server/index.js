import express from 'express';
import cors from 'cors';
import { configDotenv } from 'dotenv';
configDotenv();

import productsRouter from './routes/products.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/products', productsRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Szerverhiba történt' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Szerver fut: http://localhost:${PORT}`);
});
