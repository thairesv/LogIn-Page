import React, { useState } from "react";
import "./../login.css";

function Login() {
  const [loggedIn, setLoggedIn] = useState(false); //Holds if user is logged in or not
  const [userName, setUserName] = useState(""); //Holds user name entered
  const [password, setPassword] = useState(""); //Holds password entered
  const [error, setError] = useState(""); //Holds error message

  // Function to handle form submission and check credentials
  const handleSubmit = (e) => {
    // e.preventDefault();
    if (userName === "admin" && password === "password") {
      setLoggedIn(true);
      setError("");
    } else if (userName === "" || password === "") {
      setError("Please enter a username and password");
    } else {
      setError("Invalid username or password");
      setPassword("");
    }
  };

  //Function to handle logout and clear credentials
  const handleLogout = () => {
    setLoggedIn(false);
    setUserName("");
    setPassword("");
    setError("");
  };

  // Function to handle user name change
  const handleUserChange = (e) => {
    setUserName(e.target.value);
  };

  // Function to handle password change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // If log in succefull show welcome page, if unsuccessful show error page
  if (loggedIn) {
    return (
      <div className="login-form">
        <h1>Welcome, {userName}!</h1>
        <p>You have successfully logged in</p>
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    );
  } else if (error) {
    return (
      <div className="login-form">
        <h1>Error</h1>
        <p>{error}</p>
        <button className="back" onClick={() => setError("")}>
          Back
        </button>
      </div>
    );
  }

  // Login Form with user name and password fields
  return (
    <div className="login-form">
      <h1>Home</h1>
      <p>Welcome to the Log in Page!</p>
      <form onSubmit={handleSubmit}>
        <label>
          User Name:
          <input
            type="text"
            placeholder="Your username.."
            value={userName}
            onChange={handleUserChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            placeholder="Your password.."
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        {error && <div>{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
