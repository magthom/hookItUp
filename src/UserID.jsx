import React, { useState, useEffect, Fragment } from "react";

const UserID = (props) => {
  const { match } = props;
  let { id } = match.params;
  const [user, setUser] = useState([]);
  const getUser = async () => {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    let user = await res.json();
    setUser(user);
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <Fragment>
      <div className="card">
        <div className="card-body">
          <h3>{user.username}</h3>
          <h6>{user.email}</h6>
          <p>{user.id}</p>
        </div>
      </div>
    </Fragment>
  );
};
export default UserID;
