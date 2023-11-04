import React from "react";

interface user {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", { cache : "no-store"});
  const users: user[] = await res.json();

  return (
    <>
      <div>
        <h2>Users Page</h2>
      </div>
      <br />
      <div>{new Date().toLocaleTimeString()}</div>
      <br />
      <div>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </div>
    </>
  );
};

export default UsersPage;
