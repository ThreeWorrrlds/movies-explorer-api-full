import React, { useEffect, useState } from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

function SavedMovies({
  showFilms,
  onSearchMovies,
  isSearching,
  handleBtnDelete
}) {

  const [foundFilmsBySaved, setFoundFilmsBySaved] = useState([]);

  useEffect(() => {
    localStorage.setItem('savedFilms', JSON.stringify(showFilms));
  }, [showFilms])


  function handleSearchSavedFilms(searchName) {
    setFoundFilmsBySaved(showFilms.filter((item) => item.nameRU.includes(searchName)))
  }



  return (
    <div className="saved-movies">
      < SearchForm
        handleSearchSavedFilms={handleSearchSavedFilms}
        onSearchMovies={onSearchMovies}
      />

      <MoviesCardList
        showFilms={isSearching ? foundFilmsBySaved : showFilms}
        handleBtnDelete={handleBtnDelete}
      />

      {/*  <section className="movies__show-more" htmlFor="load-more">
        <button className="movies__show-more-button" type="button"  >Еще</button>
      </section> */}

    </div>
  );
}

export default SavedMovies;