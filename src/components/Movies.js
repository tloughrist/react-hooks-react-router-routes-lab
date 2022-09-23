import React from "react";
import { movies } from "../data";

function Movies() {
  
  const movieDisplay = movies.map((movie) => {
    return (
      <div key={movie.title}>
        <ul>
          <h2>{movie.title}</h2>
          <h3>Runtime: {movie.time} minutes</h3>
          <ul>{movie.genres.map((genre) => <li key={`${movie.title}${genre}`}>{genre}</li>)}</ul>
        </ul>
      </div>
      );
  });

  return (
  <div>
    <h1>Movies Page</h1>
    {movieDisplay}
  </div>);
}

export default Movies;
