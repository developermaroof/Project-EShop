import React from "react";
import "./Card.scss";

const Card = ({ children }) => {
  return <div className="card cardClass">{children}</div>;
};

export default Card;
