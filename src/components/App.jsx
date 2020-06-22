import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const App = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await res.json();
    setUsers(users);
  };

  // async functions return promises, this callback function
  // cannot handle promises, so make separate async and call it in useEffect

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <ul className="list-group">
            {users.map(user => (
              <React.Fragment key={user.id}>
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">{user.name}</h3>
                    <Link to={`/${user.id}/details`}>
                      <button>More Details</button>
                    </Link>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
