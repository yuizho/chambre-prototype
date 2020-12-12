import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import UserList from './components/UserList';

const App: FC = () => (
  <div className="container">
    <h1>Title</h1>
    <Link to={'/'}>Home</Link>
    <Switch>
      <Route path="/users" component={UserList} />
      <Route path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
