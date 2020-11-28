import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import './App.css';
import Home from './components/Home';
import UserList from './components/UserList';

const App: FC = () => (
  <div className="container">
    <Switch>
      <Route path="/users" component={UserList} />
      <Route path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
