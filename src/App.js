import './App.css';
import React from 'react';
import Navbar from './components/Navbar'
import {
  HomePage,
  FavoritesPage,
  CountryDetail
} from './pages'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App () {
  return (
    <>
    <Router>
    <Navbar></Navbar>
      <Switch>
        <Route path="/country/:name">
          <CountryDetail/>
        </Route>
        <Route path="/favorites">
          <FavoritesPage></FavoritesPage>
        </Route>
        <Route path="/">
          <HomePage></HomePage>
        </Route>
      </Switch>
    </Router>
    </>
  )
}

export default App;
