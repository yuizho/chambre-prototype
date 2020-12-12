import React, { FC } from 'react';
import {
  RouteComponentProps,
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import UserList from '../organisms/UserList';

const Users: FC<RouteComponentProps> = ({ match }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={`${match.path}/:id`} component={UserList} />
        <Route path={`${match.path}`} component={UserList} />
      </Switch>
    </BrowserRouter>
  );
};

export default Users;
