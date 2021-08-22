import React from "react";
import { actors } from "../data";

function Actors() {

  const actorElements = actors.map((actor) => {
    
    return (
      <div key={actor.name}>
        <h3>Name: {actor.name}</h3>
        movies:
        <ul>
          {actor.movies.map((movie) => {
            return (<li key={movie}>
              {movie}
              </li>)
          })}
        </ul>
      </div>
    )
  })

  return (<div>
      <h1>Actors Page</h1>
      {actorElements}
    </div>);
}

export default Actors;
