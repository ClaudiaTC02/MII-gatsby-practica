import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const RatingContext = createContext();

// Proveedor del contexto
export const RatingProvider = ({ children }) => {
  const [ratings, setRatings] = useState([]);

  const updateRating = (title, rating) => {
    setRatings((prevRatings) => {
      const existingRating = prevRatings.find((item) => item.title === title);
      if (existingRating) {
        return prevRatings.map((item) =>
          item.title === title
            ? { ...item, avgRating: (item.avgRating * item.count + rating) / (item.count + 1), count: item.count + 1 }
            : item
        );
      } else {
        return [...prevRatings, { title, avgRating: rating, count: 1 }];
      }
    });
  };

  return (
    <RatingContext.Provider value={{ ratings, updateRating }}>
      {children}
    </RatingContext.Provider>
  );
};

// Hook para usar el contexto
export const useRatings = () => useContext(RatingContext);
