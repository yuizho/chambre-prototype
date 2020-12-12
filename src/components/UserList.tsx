import React, { FC } from 'react';
import {
  RouteComponentProps,
  BrowserRouter,
  Route,
  Switch,
  useParams,
} from 'react-router-dom';
import useFetchMembers from '../hooks/use-fetch-members';

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
  const { users, isLoading } = useFetchMembers();

  const listItems = users.map((user, index) => (
    <li key={index}>
      <img style={{ width: '150px', height: '150px' }} src={user} />
    </li>
  ));
  return <>{isLoading ? <div>isLoading...</div> : <ul>{listItems}</ul>}</>;
};

const UserListWithFilter: FC<{}> = () => {
  const { id } = useParams<{ id: string }>();
  const { users, isLoading } = useFetchMembers(parseInt(id));

  const listItems = users.map((user, index) => (
    <li key={index}>
      <img style={{ width: '150px', height: '150px' }} src={user} />
    </li>
  ));
  return <>{isLoading ? <div>isLoading...</div> : <ul>{listItems}</ul>}</>;
};

export default UserList;
