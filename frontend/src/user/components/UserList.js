import React, { Fragment } from 'react';
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
    <Fragment>
      {items.map((user) => (
        <UserItem key={user.id} {...user} />
      ))}
      ;
    </Fragment>
  );
};

export default UserList;
