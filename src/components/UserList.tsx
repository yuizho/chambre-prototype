import React, { FC } from 'react';

interface UserListProp {
  users: Array<string>;
}

const UserList: FC<UserListProp> = (props: UserListProp) => {
  const users = props.users;
  const listItems = users.map((user) => <li key={user}>{user}</li>);
  return <ul>{listItems}</ul>;
};

export default UserList;
