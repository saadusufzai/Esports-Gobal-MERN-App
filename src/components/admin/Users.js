import React, { useEffect, useState } from "react";
import axios from "axios";
import "./admin.css";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [auth, setAuth] = useState(true);
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  useEffect(() => {
    axios
      .get("https://esports-global.herokuapp.com/api/users/")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    if(password ==='7676' && username ==='admin'){
        setAuth(false)
    }else alert('Please enter the corrent username and password')
  };

  if (auth) {
    return (
      <div className="admin-login">
        <h1>Hello Admin</h1>
        <h5> Enter your credentials here to login </h5>
        <form onSubmit={submit} className="form">
          <input
            onChange={(e) => onChangeUsername(e)}
            type="text"
            placeholder="Enter Username"
          />
          <input
            onChange={(e) => onChangePassword(e)}
            type="password"
            placeholder="Enter Password"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }

  return (
    <div>
        <h1>User Record</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>PUBG_ID</th>
            <th>City</th>
            <th>Registered On</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.firstName + " " + user.lastName}</td>
              <td>{user.phone}</td>
              <td>{user.pubgId}</td>
              <td>{user.city}</td>
              <td>{user.register_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
