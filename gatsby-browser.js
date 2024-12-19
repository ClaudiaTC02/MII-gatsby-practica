import "./src/styles/global.css";
import React from "react";
import { RatingProvider } from "./src/context/RatingContext"; // Importa el RatingProvider

export const wrapRootElement = ({ element }) => {
  return <RatingProvider>{element}</RatingProvider>; // Envuelve toda la aplicación
};
