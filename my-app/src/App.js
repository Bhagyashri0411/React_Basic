import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './Components/Home';
import { Navigation } from './Components/Navigation';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h3 className="m-3 d-flex justify-content-center">
          This basic Structure of React while using Django
        </h3>
        <p>Already Install </p>
        <ul>
          <li>Bootstrap 5</li>
          <li>Navigation</li>
          <li>Route, Routes ,etc</li>
        </ul>
        <Navigation />
        <Switch>
          <Route path='/' component={Home} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
