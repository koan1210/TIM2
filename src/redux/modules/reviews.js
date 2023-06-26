// reviews.js

import React, { useState } from "react";

const Reviews = ({ todoId }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");

  const handleAddReview = () => {
    if (newReview.trim() === "") return;

    const review = {
      id: Date.now(),
      todoId,
      content: newReview,
    };

    setReviews([...reviews, review]);
    setNewReview("");
  };

  const handleDeleteReview = (reviewId) => {
    setReviews(reviews.filter((review) => review.id !== reviewId));
  };

  const filteredReviews = reviews.filter((review) => review.todoId === todoId);

  return (
    <div>
      <h2>댓글</h2>
      <ul>
        {filteredReviews.map((review) => (
          <li key={review.id}>
            {review.content}
            <button onClick={() => handleDeleteReview(review.id)}>삭제</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        />
        <button onClick={handleAddReview}>추가</button>
      </div>
    </div>
  );
};

export default Reviews;
