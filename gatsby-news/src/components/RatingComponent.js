// src/components/RatingComponent.js
import React, { useState } from "react";
import * as styles from "./rating.module.css"; 


const RatingComponent = ({ onRate }) => {
  const [selectedRating, setSelectedRating] = useState(0);

  const setRating = (rating) => {
    setSelectedRating(rating);
    onRate(rating); // RATING HACIA EL PADRE (ShowRatingButton)
  };

  const handleKeyDown = (e, value) => {
    if (e.key === "Enter" || e.key === " ") {
      setRating(value);
    }
  };

  return (
    <div className={styles.rating}>
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          role="button"
          tabIndex={0}
          className={`${styles.star} ${value <= selectedRating ? styles.selected : ""}`}
          onClick={() => setRating(value)}
          onKeyDown={(e) => handleKeyDown(e, value)}
          aria-label={`Rate ${value} stars`}
          style={{ cursor: "pointer" }}
        >
          {value <= selectedRating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};

export default RatingComponent;
