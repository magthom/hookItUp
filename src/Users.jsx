import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await res.json();
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {users.map((users) => {
            return (
              <Fragment key={users.id}>
                <div className="card">
                  <div className="card-body">
                    <h2>{users.name}</h2>
                    <Link to={`/${users.id}/details`}>
                      <button>Show Details</button>
                    </Link>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Users;
