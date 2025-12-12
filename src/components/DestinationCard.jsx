import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton'; // we’ll create this later

function DestinationCard({ destination }) {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Img 
        variant="top" 
        src={destination.photos[0]} 
        alt={destination.title} 
      />
      <Card.Body>
        <Card.Title>{destination.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{destination.location}</Card.Subtitle>
        <Card.Text>{destination.description.substring(0, 100)}...</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <Button as={Link} to={`/destinations/${destination.id}`} variant="primary">
            View Details
          </Button>
          <FavoriteButton destinationId={destination.id} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default DestinationCard;