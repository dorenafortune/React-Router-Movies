import React, { useState } from 'react';
import SavedList from './Movies/SavedList';
import { Route } from 'react-router-dom';
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };


  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Route exact path ="/">
      <MovieList/>
      </Route>
      <Route path ="/movies/:id" component={MovieList}>
        <Movie/>
      </Route>
    
      </div>
    </div>
  );
};

export default App;
