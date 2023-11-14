import React from "react";
import MovieCard from "./MovieCard";

const MovieComponent = ({ myinfo }) => {
  return (
    <div className="wrapper">
      <div className="container">
        <h1>List of cards</h1>
        <div className="grid grid-three-column">
          {myinfo.map((curVal, id) => {
            return <MovieCard key={id} mydata={curVal} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieComponent;
