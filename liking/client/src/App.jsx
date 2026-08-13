import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import ProductCard from './components/ProductCard.jsx';
import { fetchProducts, likeProduct } from './api.js';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    setStatus('loading');
    try {
      const data = await fetchProducts();
      setProducts(data);
      setStatus('ready');
    } catch {
      setStatus('error');
    }
  }

  async function handleLike(id) {
    const updated = await likeProduct(id);
    setProducts((prev) => prev.map((p) => (p.id === id ? updated : p)));
  }

  return (
    <>
      <Header />
      <main className="main">
        {status === 'loading' && (
          <div className="state">
            <div className="spinner" />
            <p>Termékek betöltése...</p>
          </div>
        )}

        {status === 'error' && (
          <div className="state">
            <p className="state__title">Nem sikerült elérni a szervert</p>
            <p>Ellenőrizd, hogy fut-e a backend, majd próbáld újra.</p>
            <button type="button" className="retry-btn" onClick={loadProducts}>
              Újrapróbálkozás
            </button>
          </div>
        )}

        {status === 'ready' && products.length === 0 && (
          <div className="state">
            <p className="state__title">Még nincsenek termékek</p>
          </div>
        )}

        {status === 'ready' && products.length > 0 && (
          <div className="grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onLike={handleLike} />
            ))}
          </div>
        )}
      </main>
      <footer className="footer">Készült Express + React-tal</footer>
    </>
  );
}

export default App;
