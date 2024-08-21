import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CounterPage from 'pages/CounterPage/CounterPage';
import HomePage from 'pages/CounterPage/HomePage/HomePage';
import NotFoundPage from 'pages/NotFoundPage/NotfoundPage';
import UsersPage from 'pages/UsersPage/UsersPage';



function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/counter' component={CounterPage} />
      <Route path='/users' component={UsersPage} />
      <Route path='*' component={NotFoundPage} />
    </Switch>

  );
}

export default App;
