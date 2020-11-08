import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';

const App: FC = () => (
  <div className="App">
    <main>
      <UserList users={['a', 'b', 'c']} />
    </main>
  </div>
);

export default App;
