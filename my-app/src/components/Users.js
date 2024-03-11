import React from 'react';

export const Users = ({ users }) => {
  return (
    <div>
      <h2>Users List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Position</th>

          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
