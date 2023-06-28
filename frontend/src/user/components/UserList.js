import React from 'react';
import UserItem from './UserItem';
import './UserList.css';

const UserList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="center">
        <h2>No users found.</h2>
      </div>
    );
  }

  return (
    <div className="users-list">
      {items.map((user) => (
        <UserItem key={user.id} {...user} />
      ))}
      ;
    </div>
  );
};

export default UserList;
