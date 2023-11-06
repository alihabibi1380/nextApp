import React from "react";

interface user {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: user[] = await res.json();

  return (
    <>
      <div>
        <h2>Users Page</h2>
      </div>
      <br />
      <div>{new Date().toLocaleTimeString()}</div>
      <br />
      <table className="table table-bordred">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody></tbody>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default UsersPage;
