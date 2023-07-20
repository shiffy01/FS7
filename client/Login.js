import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedInUser) {
      localStorage.setItem("user", JSON.stringify(loggedInUser));
    }
  }, [loggedInUser]);

  useEffect(() => {
    // in case user already connected
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      console.log("navigate users");
      navigate("/users/" + parsedUser.id);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3000/users?username=${username}`
      );
      const data = await response.json();
      const user = data[0];
      if (user && password === user.password) {
        setLoggedInUser(user);
        //update localStoarge
        localStorage.setItem("user", JSON.stringify(user)); ////////////////////?
        console.log("navigate users");
        setLogin(false);
        navigate(`/users/${user.id}`);
      } else {
        setError("Invalid username or password.");
      }
    } catch (error) {
      setError("Error logging in.");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Login</h1>
        <input
          type="text"
          className="login-input"
          placeholder="Username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          className="login-input"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <div className="login-error">{error}</div>}
        <button type="submit" className="login-button">
          Login
        </button>
        <Link to="/register">
          <button className="login-button">Register</button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
