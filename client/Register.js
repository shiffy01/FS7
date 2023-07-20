import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      name,
      city,
      username,
      email,
      password,
    };
    if (
      [
        name.trim(),
        city.trim(),
        username.trim(),
        email.trim(),
        password.trim(),
      ].includes("")
    ) {
      return alert("Fill it!");
    }

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data)); ///////////?
        navigate("/users/" + data.id);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message);
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          className="register-input"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          className="register-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          className="register-input"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="register-input"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          className="register-input"
          placeholder="City"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <button type="submit" className="register-button">
          Register
        </button>
        <Link to="/login">
          <button className="register-button">
            Login with registered user
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Register;
