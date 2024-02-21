import React, { useState } from "react";
import { loginApiCall, storeToken } from "../service/AuthService";
import { useNavigate } from "react-router";

export default function LoginComponent() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigate();

  const handleLoginForm = (e) => {
    e.preventDefault();
    const loginObj = {
      usernameOrEmail: username,
      password: password,
    };
    //console.log(loginObj);
    loginApiCall(loginObj.usernameOrEmail, loginObj.password)
      .then((resp) => {
        
        const token =
          "Basic " +
          window.btoa(loginObj.usernameOrEmail + ":" + loginObj.password);
        storeToken(token);
        navigator("/todos");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="offset-md-3 col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Login Form</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="row mb-3 align-items-center">
                  <label className="col-md-3">UserName</label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="username"
                      value={username}
                      placeholder="Enter UserName"
                      onChange={(e) => setUserName(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row mb-3 align-items-center">
                  <label className="col-md-3">Password</label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="password"
                      value={password}
                      placeholder="Enter Password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
                <button
                  onClick={(e) => handleLoginForm(e)}
                  className="btn btn-primary"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}