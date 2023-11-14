import React from "react";

const MovieCard = ({ mydata }) => {
  const { title, body, id } = mydata;
  return (
    <div className="card">
      <div className="card-info">
        <p className="card-id">{id}</p>
        <p>{body.substr(0, 150)}</p>
        <h2>{title.substr(0, 15)}</h2>
      </div>
    </div>
  );
};

export default MovieCard;
