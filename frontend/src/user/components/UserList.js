import React from 'react';
import Card from '../../shared/components/UIElements/Card';
import UserItem from './UserItem';
import './UserList.css';

const UserList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <div className="users-list">
      {items.map((user) => (
        <UserItem key={user.id} {...user} />
      ))}
    </div>
  );
};

export default UserList;
