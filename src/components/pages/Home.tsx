import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Home: FC = () => (
  <>
    <div>
      <ul>
        <li>
          <Link to="/users">users</Link>
        </li>
        <li>
          <Link to="/users/1">users/1</Link>
        </li>
        <li>
          <Link to="/apply">apply</Link>
        </li>
      </ul>
    </div>
  </>
);

export default Home;
