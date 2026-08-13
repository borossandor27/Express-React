import express from 'express';
import pool from '../db.js';

const router = express.Router();

// Összes termék lekérése
router.get('/', async (req, res, next) => {
  try {
    const [rows] = await pool.query('SELECT id, text, likes FROM products ORDER BY id');
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

// Egy termék lekérése
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query('SELECT id, text, likes FROM products WHERE id = ?', [id]);

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Termék nem található' });
    }

    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});

// Új termék létrehozása
router.post('/', async (req, res, next) => {
  try {
    const { text, likes = 0 } = req.body;

    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'A "text" mező kötelező' });
    }

    const [result] = await pool.query('INSERT INTO products (text, likes) VALUES (?, ?)', [text, likes]);
    const [rows] = await pool.query('SELECT id, text, likes FROM products WHERE id = ?', [result.insertId]);
    res.status(201).json(rows[0]);
  } catch (err) {
    next(err);
  }
});

// Termék frissítése
router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { text, likes } = req.body;

    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'A "text" mező kötelező' });
    }

    const [result] = await pool.query('UPDATE products SET text = ?, likes = ? WHERE id = ?', [
      text,
      likes ?? 0,
      id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Termék nem található' });
    }

    const [rows] = await pool.query('SELECT id, text, likes FROM products WHERE id = ?', [id]);
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});

// Termék törlése
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query('DELETE FROM products WHERE id = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Termék nem található' });
    }

    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

// Egy termék kedvelése (likes növelése eggyel)
router.patch('/:id/like', async (req, res, next) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query('UPDATE products SET likes = likes + 1 WHERE id = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Termék nem található' });
    }

    const [rows] = await pool.query('SELECT id, text, likes FROM products WHERE id = ?', [id]);
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});

export default router;
