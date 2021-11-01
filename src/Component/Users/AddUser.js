import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });
  const { name, username, email } = user;

  const onInputChange = (e) => {
    console.log(e.target.value);
    setUser({...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/home");
  };
  return (
    <div>
      <form onSubmit={e => onSubmit(e)}>
        <div className="container mb-3 mx-2 my-2">
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              name="name"
              value={name}
              placeHolder="Enter your name here"
              onChange={(e) => onInputChange(e)}
            />
            <div id="NameHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputUserName" className="form-label">
              UserName
            </label>
            <input
              type="text"
              className="form-control"
              value={username}
              placeHolder="Enter your username here"
              name="username"
              onChange={(e) => onInputChange(e)}
            />
            <div id="UserNameHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="exampleInputemail"
              value={email}
              placeHolder="Enter your email here"
              onChange={(e) => onInputChange(e)}
            />
            <div id="emailHelp" className="form-text "></div>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};
