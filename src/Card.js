import React from "react";

const Card = props => {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <h2>{props.url}</h2>
      <h2>{props.about}</h2>
    </div>
  );
};

export default Card;
