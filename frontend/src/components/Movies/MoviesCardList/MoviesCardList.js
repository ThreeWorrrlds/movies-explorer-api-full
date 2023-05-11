import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({ movies, onIsSearching }) {
  return (
    <ul className="movies-cards">

      {onIsSearching ?

        movies.map(film => (
          <MoviesCard
            key={film.id}
            id={film.id}
            img={`https://api.nomoreparties.co/${film.image.url}`}
            name={film.nameRU}
            duration={film.duration}
          />
        ))
        : null}

    </ul>
  )
}
export default MoviesCardList;
