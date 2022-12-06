import React, { useContext } from "react";
import { RestaurantContext } from "../RestaurantContext";
import ReviewCard from "./ReviewCard";
import "./Review.css";

function ReviewContainer() {
  const { reviews, handleAddReview } = useContext(RestaurantContext);

  const reviewList = reviews.map((review) => (
    <ReviewCard
      key={review.id}
      reviewId={review.id}
      reviewTitle={review.title}
      reviewComment={review.comment}
      reviewUser={review.user}
    />
  ));
  return (
    <div className="review-container">
      <h3>Reviews</h3>
      <button className="review-btn" onClick={handleAddReview}>
        Add Review
      </button>
      {reviewList}
    </div>
  );
}

export default ReviewContainer;
