import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {movies.map((movie) => {
    return <div key={movie.title}>
      <h3>Name: {movie.title}</h3>
      Time: {movie.time}<br></br>
      Genres:
          {movie.genres.map((genre) => <li key={genre.toLowerCase()}>{genre}</li>)}
      
    </div>
  })}</div>;
}

export default Movies;
