import React from "react";
import UserTabel from "./userTabel";

interface Props {
  searchParams : {
    sortOrder : string
  }
}


const UsersPage = ({searchParams : {sortOrder}} : Props) => {
  
  console.log(sortOrder);

  return (
    <>
      <div>
        <h2>Users Page</h2>
      </div>
      <br />
      <div>{new Date().toLocaleTimeString()}</div>
      <br />
      <UserTabel sortOrder={sortOrder}/>
    </>
  );
};

export default UsersPage;
