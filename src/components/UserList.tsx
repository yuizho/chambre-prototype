import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';

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

interface UserListProp {
  users: Array<User>;
}

const UserList: FC<{}> = () => {
  const props = {
    users: [
      { id: '1', name: 'admin', role: 1 },
      { id: '2', name: 'normal', role: 0 },
    ],
  };
  const users = props.users;
  const listItems = users.map((user) => (
    <li key={user.id}>
      {user.name}@{user.role}
    </li>
  ));
  return <ul>{listItems}</ul>;
};

export default UserList;
