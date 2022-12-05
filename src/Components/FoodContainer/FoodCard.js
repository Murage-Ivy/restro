import React from "react";
import "./FoodContainer.css";

function FoodCard({ foodName, foodPrice, foodImage, foodRating }) {
  return (
    <div className="food-card">
      <img src={foodImage} alt={foodName} className="food-img" />
      <h3> {foodName} </h3>
      <p style={{ color: "#e1f52c", fontSize: "15px" }}>Price: ${foodPrice}</p>
      <div className="star-card">
        {[...Array(foodRating)].map((star) => {
          return (
            <span className="star" style={{ color: "#e1f52c" }}>
              &#9733;
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default FoodCard;
