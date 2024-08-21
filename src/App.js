import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CounterPage from 'pages/CounterPage/CounterPage';
import HomePage from 'pages/CounterPage/HomePage/HomePage';
import NotFoundPage from 'pages/NotFoundPage/NotfoundPage';



function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/counter' component={CounterPage} />
      <Route path='*' component={NotFoundPage} />
    </Switch>

  );
}

export default App;
