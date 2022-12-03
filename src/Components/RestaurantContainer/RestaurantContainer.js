import React, { useContext } from "react";
import { RestaurantContext } from "../RestaurantContext";
import RestaurantCard from "./RestaurantCard";
import "./RestaurantContainer.css";

function RestaurantContainer() {
  const { loading, errors, restaurants } = useContext(RestaurantContext);

  const restaurantList = restaurants.map((restaurant) => (
    <RestaurantCard
      key={restaurant.id}
      restaurantName={restaurant.name}
      restaurantAddress={restaurant.address}
      restaurantRating={restaurant.rating}
      restaurantLike={restaurant.like}
      restaurantImage={restaurant.image_url}
    />
  ));
  return (
    <div className="restaurant-container">
      {/* <h2>Popular Restaurants</h2> */}
      {errors.length > 0
        ? errors.map((error) => <span className="error-message">{error}</span>)
        : null}
      {loading ? <h2>Loading...</h2> : restaurantList}
    </div>
  );
}

export default RestaurantContainer;