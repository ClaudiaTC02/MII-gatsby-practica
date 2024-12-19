import React, { useState } from "react";
import { useRatings } from "../context/RatingContext";
import RatingComponent from "./RatingComponent"; 
import * as styles from "./modal.module.css"; 

const ShowRatingButton = ({ title }) => {
  const { ratings, updateRating } = useRatings(); 
  const [modalVisible, setModalVisible] = useState(false);
  
  const ratingData = ratings.find((item) => item.title === title) || { avgRating: 0, count: 0 };

  const showRatings = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleRatingChange = (rating) => {
    updateRating(title, rating); 
  };

  return (
    <>
      <button id={styles} onClick={showRatings} className={styles.ratingButton}>
        Ver valoraciones
      </button>
      {modalVisible && (
        <div className={styles.modalOverlay}>
          <div className={styles.ratingModal}>
            <h3>Valoraciones para "{title}"</h3>
            <p><strong>Promedio:</strong> {ratingData.avgRating.toFixed(2)} estrellas</p>
            <p><strong>Cantidad:</strong> {ratingData.count} valoraciones</p>
            <button onClick={closeModal} className={styles.ratingModalButton}>Cerrar</button>
          </div>
        </div>
      )}
      <RatingComponent onRate={handleRatingChange} />
    </>
  );
};

export default ShowRatingButton;
