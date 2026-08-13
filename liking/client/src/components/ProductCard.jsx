import { useState } from 'react';

function ProductCard({ product, onLike }) {
  const [justLiked, setJustLiked] = useState(false);
  const [isLiking, setIsLiking] = useState(false);

  async function handleLike() {
    if (isLiking) return;
    setIsLiking(true);
    try {
      await onLike(product.id);
      setJustLiked(true);
    } finally {
      setIsLiking(false);
    }
  }

  return (
    <article className="card">
      <p className="card__text">{product.text}</p>
      <div className="card__footer">
        <button
          type="button"
          className={`like-btn${justLiked ? ' is-liked' : ''}`}
          onClick={handleLike}
          disabled={isLiking}
        >
          <span className="like-btn__icon">{justLiked ? '❤️' : '🤍'}</span>
          {product.likes}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
