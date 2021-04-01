import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './Views/LandingPage';
import SearchPage from './Views/SearchPage';
import './Styling/App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/search">
          <SearchPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
