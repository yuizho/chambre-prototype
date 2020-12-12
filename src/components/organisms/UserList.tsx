import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import useFetchMembers from '../../hooks/use-fetch-members';

const UserList: FC<{}> = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const { users, isLoading } = useFetchMembers(id ? parseInt(id) : undefined);

  const listItems = users.map((user, index) => (
    <li key={index}>
      <img style={{ width: '150px', height: '150px' }} src={user} />
    </li>
  ));
  return <>{isLoading ? <div>isLoading...</div> : <ul>{listItems}</ul>}</>;
};

export default UserList;
