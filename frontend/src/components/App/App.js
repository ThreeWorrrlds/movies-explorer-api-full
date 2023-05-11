import React, { useEffect, useState } from 'react';
import { Route, Switch, /*  Redirect, useHistory */ } from 'react-router-dom';
import './App.css';
import { beatfilmApi } from '../../utils/MoviesApi'
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import PageNotFound from '../PageNotFound/PageNotFound'
import Preloader from '../Movies/Preloader/Preloader';


function App() {

  const [isSearching, setIsSearching] = useState(false);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSearchMovies() {
    setIsSearching(true);
  }

  function closeSearchMovies() {
    setIsSearching(false);
  }

  /*   useEffect(() => {
      beatfilmApi.getAllMovies()
        .then((dataFilms) => {
          setMovies(dataFilms);
        })
        .catch((err) => {
          console.log('Данные не получены', err)
        })
  
    }, [isSearching]) */


  function handleSearchByName() {  /*  понять нужны ли сюда данные которые пробрасываем переменной сюда из SearchForm */
    setIsLoading(true);
    beatfilmApi.getAllMovies()
      .then((dataFilms) => {
        setMovies(dataFilms);
      })
      .catch((err) => {
        console.log('Данные не получены', err)
      })
      .finally(() => {
        setIsLoading(false);
      })
  }


  return (
    <div className="page">
      <Switch>
        <Route exact path='/'>
          <Header />
          {/* <Preloader /> */}
          <Main />
          <Footer />
        </Route>

        <Route path='/movies'>
          <Header />
          <Movies
            movies={movies}
            onSearchMovies={handleSearchMovies}
            onIsSearching={isSearching}
            onSearchByName={handleSearchByName}
            isLoading={isLoading}
          />
          <Footer />
        </Route>

        <Route path='/saved-movies'>
          <Header />
          <SavedMovies />
          <Footer />
        </Route>

        <Route path='/profile'>
          <Header />
          <Profile />
        </Route>

        <Route path='/signup'>
          <Register />
        </Route>

        <Route path='/signin'>
          <Login />
        </Route>

        <Route path='/*'>
          <PageNotFound />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
