import React, { FC } from 'react';
import {
  RouteComponentProps,
  BrowserRouter,
  Route,
  Switch,
  useParams,
} from 'react-router-dom';

type Role = 0 | 1;

class User {
  id: string;
  name: string;
  role: Role;
  constructor(id: string, name: string, role: Role) {
    this.id = id;
    this.name = name;
    this.role = role;
  }
}

const data = {
  users: [
    { id: '1', name: 'admin', role: 1 },
    { id: '2', name: 'normal', role: 0 },
  ],
};

const UserList: FC<RouteComponentProps> = ({ match }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={`${match.path}/:id`} component={UserListWithFilter} />
        <Route path={`${match.path}`} component={AllUserList} />
      </Switch>
    </BrowserRouter>
  );
};

const AllUserList: FC<{}> = () => {
  const listItems = data.users.map((user) => (
    <li key={user.id}>
      {user.name}@{user.role}
    </li>
  ));
  return <ul>{listItems}</ul>;
};

const UserListWithFilter: FC<{}> = () => {
  const { id } = useParams<{ id: string }>();
  const listItems = data.users
    .filter((user) => user.id === id)
    .map((user) => (
      <li key={user.id}>
        {user.name}@{user.role}
      </li>
    ));
  return <ul>{listItems}</ul>;
};

export default UserList;
