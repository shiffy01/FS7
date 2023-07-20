import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/Info.css";

function Info() {
  const params = useParams();
  const [user, setUser] = useState(null);
  const getUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data !== []) {
        setUser(data.filter((user) => user.id == params.userid)[0]);
      }
    } catch (error) {
      throw error; ///////////////////?
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (!user) return <div>loading...</div>;
  return (
    <div className="info-message">
      <h1>{user.name}</h1>
      <p>Username: {user.username}</p>
      <p>Password: {user.password}</p>
      <p>Email: {user.email}</p>
      <p>City: {user.city}</p>
    </div>
  );
}

export default Info;
