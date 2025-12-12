import React, { useState } from 'react';

function ReviewForm({ destinationId, onNewReview }) {
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!review) return;

    const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    const destinationReviews = reviews[destinationId] || [];
    const updatedReviews = {
      ...reviews,
      [destinationId]: [...destinationReviews, review],
    };

    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
    setReview('');

    if (onNewReview) {
      onNewReview();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="mb-2">
        <label htmlFor={`review-${destinationId}`} className="form-label">
          Write a review:
        </label>
        <textarea
          id={`review-${destinationId}`}
          className="form-control"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          rows="3"
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit Review</button>
    </form>
  );
}

export default ReviewForm;