import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './Views/LandingPage';
import './Styling/App.css';

function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/how-it-works">
              <h1>How it works</h1>
            </Route>
            <Route exact path="/about">
              <h1>About</h1>
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
