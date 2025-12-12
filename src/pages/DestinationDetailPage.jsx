import React from 'react';
import { useParams } from 'react-router-dom';
import destinations from '../data';
import FavoriteButton from '../components/FavoriteButton';
import ReviewForm from '../components/ReviewForm';
import ReviewList from '../components/ReviewList';

function DestinationDetailPage() {
  const { id } = useParams();
  const destination = destinations.find(dest => dest.id === parseInt(id));

  if (!destination) {
    return <h2>Destination not found</h2>;
  }

  return (
    <div>
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

      <h3 className="mt-4">Photo</h3>
      <img 
        src={destination.photos[0]} 
        alt={destination.title} 
        className="img-fluid mb-3"
      />

      <h3 className="mt-4">Reviews</h3>
      <ReviewForm destinationId={destination.id} />
      <ReviewList destinationId={destination.id} />
    </div>
  );
}

export default DestinationDetailPage;