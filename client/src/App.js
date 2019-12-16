import React, { useState } from 'react';
import SavedList from './Movies/SavedList';

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
      <Route path ="/movies/:movieID">
        <Movie/>
      </Route>
    
      </div>
    </div>
  );
};

export default App;
