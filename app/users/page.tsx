import React from "react";
import UserTabel from "./userTabel";



const UsersPage = () => {
  

  return (
    <>
      <div>
        <h2>Users Page</h2>
      </div>
      <br />
      <div>{new Date().toLocaleTimeString()}</div>
      <br />
      <UserTabel />
    </>
  );
};

export default UsersPage;
