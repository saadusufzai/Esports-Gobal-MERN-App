import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAlert } from "react-alert"
import "./admin.css";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [auth, setAuth] = useState(true);
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();

  const alert = useAlert();

  useEffect(() => {
    axios
      .get("https://esports-global.herokuapp.com/api/users/")
      .then((res) => {
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

    if (password === "7676" && username === "admin") {
      alert.success("Hey Admin! Thanks for signing in")
      setTimeout(() => {
        setAuth(false);
      },1000)
      
    } else alert.error("Invalid Credentials");
  };

  const deleteUser = (id) => {
    window.confirm('Are You Sure You want to Delete this User ?')
    axios
      .delete(`https://esports-global.herokuapp.com/api/users/${id}`)
      .then((res) => {
        console.log(res.data)
    setUsers(users.filter((e) => e._id !== id));
    alert.info(res.data)
      });
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
    <div className="usersEdit">
      <h1>User Record</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>PUBG_ID</th>
            <th>City</th>
            <th>Registered On</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{user.firstName + " " + user.lastName}</td>
              <td>{user.phone}</td>
              <td>{user.pubgId}</td>
              <td>{user.city}</td>
              <td>{user.register_date}</td>
              <td>
                <i
                  onClick={() => deleteUser(user._id)}
                  style={{
                    color: "red",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                  className=" icons fa fa-trash"
                  aria-hidden="true"
                ></i>{" "}
                |{" "}
                <i
                  style={{
                    color: "green",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                  className=" icons fa fa-pencil"
                  aria-hidden="true"
                ></i>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
