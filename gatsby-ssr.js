import React from "react";
import { RatingProvider } from "./src/context/RatingContext"; // Importa el RatingProvider

export const wrapRootElement = ({ element }) => (
  <RatingProvider>{element}</RatingProvider>
);
