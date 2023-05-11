import React from "react";

function SearchForm({ onSearchMovies, onSearchByName }) {

  const [nameFilm, setNameFilm] = React.useState('');
  const [shortFilm, setShortFilm] = React.useState(false);



  function handleInputNameChange(e) {
    setNameFilm(e.target.value);
  }

  function handleCheckboxChange() {
    if (!shortFilm) {
      setShortFilm(true);
    } else {
      setShortFilm(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSearchByName({
      nameFilm,    /* здесь уже хранится текст из строки поиска фильмов и OnSearchByName передает имя фильма в App.js как пропс */
      shortFilm    /* и значение чекбокса короткометражки */
    })
  }




  return (
    <section className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit}>
        <input value={nameFilm} onChange={handleInputNameChange} type="search" className="search-form__input-search" placeholder="Фильм" minLength={3} maxLength={30} required />
        <button type="submit" className="search-form__button-submit" onClick={onSearchMovies} ></button>

        <span className="search-form__separator"></span>

        <label htmlFor="shortfilms" className="search-form__label-of-checkbox">
          <input value={shortFilm} onChange={handleCheckboxChange} id="shortfilms" type="checkbox" className="search-form__checkbox-invisible" />
          <span className="search-form__checkbox-visible">
            <span className="search-form__checkbox-toggle"></span>
          </span>
          <span className="search-form__lable-text">Короткометражки</span>
        </label>
      </form>
    </section>
  )
}
export default SearchForm;