import React from 'react';

function UserComponent({ users }) {
  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserComponent;
