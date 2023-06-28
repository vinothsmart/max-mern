import React from 'react';
import UserList from '../components/UserList';
const USERS = [
  {
    id: 'u1',
    name: 'Max Schwarz',
    image: 'https://avatars.githubusercontent.com/u/5498919?v=4',
    places: 3,
  },
];

const Users = () => {
  return <UserList items={USERS} />;
};

export default Users;
