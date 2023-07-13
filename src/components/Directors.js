import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    {directors.map((director) => {
     return <div key={director.name}>
        <h3>{director.name}</h3>
        Movies: 
          {director.movies.map((movie) => <li key={movie}>{movie}</li>)}
      </div>
    })}
    </div>;
}

export default Directors;
