import React from 'react';
import './App.css';
import Home from './components/Home';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Home />

      <Switch>
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/randombeer" component={RandomBeer} />
        <Route exact path="/newbeer" component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
