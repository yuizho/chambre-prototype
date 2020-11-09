import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';

const App: FC = () => (
  <div className="App">
    <main>
      <UserList
        users={[
          { id: '0', name: 'admin', role: 1 },
          { id: '1', name: 'ichiro', role: 0 },
        ]}
      />
    </main>
  </div>
);

export default App;
