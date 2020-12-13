import React, { FC } from 'react';
import { Redirect, Route, Switch, Link } from 'react-router-dom';

import './App.css';
import Apply from './components/pages/Apply';
import Home from './components/pages/Home';
import Users from './components/pages/Users';

const App: FC = () => (
  <div className="container">
    <h1>Title</h1>
    <Link to="/">Home</Link>
    <Switch>
      <Route path="/users" component={Users} />
      <Route path="/apply" component={Apply} />
      <Route path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
