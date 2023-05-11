import React from "react";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "./Preloader/Preloader";

function Movies({ movies, onSearchMovies, onIsSearching, onSearchByName, isLoading }) {

  return (
    <div className="movies">
      < SearchForm onSearchMovies={onSearchMovies} onSearchByName={onSearchByName} />

      {isLoading ?
        <Preloader /> :
        < MoviesCardList
          movies={movies}
          onIsSearching={onIsSearching}
        />
      }

      <section className="movies__show-more" for="load-more">
        <button className="movies__show-more-button" type="button">Еще</button>
      </section>
    </div>
  );
}
export default Movies;
