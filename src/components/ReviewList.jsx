import React, { useState, useEffect } from 'react';

function ReviewList({ destinationId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const allReviews = JSON.parse(localStorage.getItem('reviews')) || {};
    setReviews(allReviews[destinationId] || []);
  }, [destinationId]);

  if (reviews.length === 0) {
    return <p>No reviews yet. Be the first to review!</p>;
  }

  return (
    <ul className="list-group">
      {reviews.map((rev, index) => (
        <li key={index} className="list-group-item">
          {rev}
        </li>
      ))}
    </ul>
  );
}

export default ReviewList;