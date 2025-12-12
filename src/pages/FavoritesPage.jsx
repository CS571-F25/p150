import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import destinations from '../data';
import DestinationCard from '../components/DestinationCard';

function FavoritesPage() {
  const [favoriteIds, setFavoriteIds] = useState([]);

  const loadFavorites = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteIds(storedFavorites);
  };

  useEffect(() => {
    loadFavorites();
    window.addEventListener('favoritesUpdated', loadFavorites);
    return () => window.removeEventListener('favoritesUpdated', loadFavorites);
  }, []);

  const favoriteDestinations = destinations.filter(dest => favoriteIds.includes(dest.id));

  return (
    <Container 
      fluid 
      className="py-4 d-flex flex-column" 
      style={{ minHeight: '80vh' }}  // ensures page takes at least 80% of viewport
    >
      <h1 className="mb-4 text-center">My Favorites</h1>

      {favoriteDestinations.length === 0 ? (
        <div className="flex-grow-1 d-flex justify-content-center align-items-center">
          <p className="text-center fs-4">You haven’t favorited any destinations yet.</p>
        </div>
      ) : (
        <Row className="g-4 flex-grow-1">
          {favoriteDestinations.map(dest => (
            <Col key={dest.id} xs={12} sm={6} md={4}>
              <DestinationCard destination={dest} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default FavoritesPage;