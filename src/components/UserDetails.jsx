import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const UserDetails = props => {
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
    <React.Fragment key={user.id}>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{user.name}</h3>
          <h6 className="card-subtitle mb-2 text-muted">{user.username}</h6>
          <p>
            {/* {user.address.street} {user.address.suite}, {user.address.city}{" "}
            <br />
        {user.address.zipcode} */}
          </p>

          {user && user.address && user.address.zipcode && (
            <p>
              {user.address.street} {user.address.suite}, {user.address.city}{" "}
              <br />
              {user.address.zipcode}
            </p>
          )}
          <p>
            Phone: {user.phone} <br />
            Email: {user.email} <br />
            Website: {user.website}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserDetails;

