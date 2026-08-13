const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export async function fetchProducts() {
  const res = await fetch(`${API_URL}/products`);
  if (!res.ok) {
    throw new Error('Nem sikerült betölteni a termékeket');
  }
  return res.json();
}

export async function likeProduct(id) {
  const res = await fetch(`${API_URL}/products/${id}/like`, { method: 'PATCH' });
  if (!res.ok) {
    throw new Error('Nem sikerült a kedvelés mentése');
  }
  return res.json();
}
