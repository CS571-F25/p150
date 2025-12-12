import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import destinations from '../data';
import FavoriteButton from '../components/FavoriteButton';
import ReviewForm from '../components/ReviewForm';
import ReviewList from '../components/ReviewList';

function DestinationDetailPage() {
  const { id } = useParams();
  const destination = destinations.find(dest => dest.id === parseInt(id));

  const [activeIndex, setActiveIndex] = useState(0); // track main carousel index

  if (!destination) return <h2>Destination not found</h2>;

  return (
    <Container className="py-4">
      <h1>{destination.title}</h1>
      <p><strong>Location:</strong> {destination.location}</p>
      <p><strong>Category:</strong> {destination.category}</p>
      <p><strong>Recommended Time to Visit:</strong> {destination.recommendedTime}</p>
      <p>{destination.description}</p>
      <p>
        <a href={destination.website} target="_blank" rel="noopener noreferrer">
          Official Website
        </a>
      </p>

      <FavoriteButton destinationId={destination.id} />

      {/* Main Carousel */}
      <h3 className="mt-4">Photos</h3>
      {destination.photos && destination.photos.length > 0 && (
        <>
          <Carousel
            activeIndex={activeIndex}
            onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
          >
            {destination.photos.map((photo, idx) => (
              <Carousel.Item key={idx}>
                <img
                  className="d-block w-100"
                  src={photo}
                  alt={`${destination.title} image ${idx + 1}`}
                  style={{ maxHeight: '500px', objectFit: 'cover' }}
                />
              </Carousel.Item>
            ))}
          </Carousel>

          {/* Thumbnail previews */}
          <Row className="mt-3 justify-content-center">
            {destination.photos.map((photo, idx) => (
              <Col xs="auto" key={idx}>
                <img
                  src={photo}
                  alt={`${destination.title} thumbnail ${idx + 1}`}
                  style={{
                    width: '80px',
                    height: '60px',
                    objectFit: 'cover',
                    cursor: 'pointer',
                    border: activeIndex === idx ? '2px solid #007bff' : '1px solid #ccc',
                    borderRadius: '4px'
                  }}
                  onClick={() => setActiveIndex(idx)}
                />
              </Col>
            ))}
          </Row>
        </>
      )}

      {/* Reviews */}
      <h3 className="mt-4">Reviews</h3>
      <ReviewForm destinationId={destination.id} />
      <ReviewList destinationId={destination.id} />
    </Container>
  );
}

export default DestinationDetailPage;