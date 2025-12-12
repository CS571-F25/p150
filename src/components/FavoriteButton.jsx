import React, { useState, useEffect } from 'react';

function FavoriteButton({ destinationId }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.includes(destinationId));
  }, [destinationId]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let updatedFavorites;

    if (favorites.includes(destinationId)) {
      updatedFavorites = favorites.filter(id => id !== destinationId);
    } else {
      updatedFavorites = [...favorites, destinationId];
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <button className={`btn ${isFavorite ? 'btn-warning' : 'btn-outline-warning'}`} onClick={toggleFavorite}>
      {isFavorite ? '★ Favorited' : '☆ Favorite'}
    </button>
  );
}

export default FavoriteButton;