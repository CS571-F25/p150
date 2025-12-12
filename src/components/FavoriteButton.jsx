import React, { useState, useEffect } from 'react';

function FavoriteButton({ destinationId }) {
  const [isFavorited, setIsFavorited] = useState(false);

  // Load initial state from localStorage
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorited(storedFavorites.includes(destinationId));
  }, [destinationId]);

  const handleFavoriteToggle = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let updatedFavorites;

    if (isFavorited) {
      // Remove from favorites
      updatedFavorites = storedFavorites.filter(id => id !== destinationId);
    } else {
      // Add to favorites
      updatedFavorites = [...storedFavorites, destinationId];
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorited(!isFavorited);

    // Dispatch a custom event so other components (FavoritesPage) can listen
    window.dispatchEvent(new Event('favoritesUpdated'));
  };

  return (
    <button
      className={`btn ${isFavorited ? 'btn-danger' : 'btn-outline-danger'} btn-sm`}
      onClick={handleFavoriteToggle}
    >
      {isFavorited ? '♥ Favorited' : '♡ Favorite'}
    </button>
  );
}

export default FavoriteButton;