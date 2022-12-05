import React, { useContext, useState } from "react";
import { RestaurantContext } from "../RestaurantContext";
import ReviewCard from "./ReviewCard";
import "./Review.css";

function ReviewContainer() {
  const { reviews } = useContext(RestaurantContext);

  const reviewList = reviews.map((review) => (
    <ReviewCard
      key={review.id}
      reviewTitle={review.title}
      reviewComment={review.comment}
      reviewUser={review.user}
    />
  ));
  return (
    <div className="review-container">
      <h3>Reviews</h3>
      <button className="review-btn">Add Review</button>
      {reviewList}
    </div>
  );
}

export default ReviewContainer;