import { useEffect } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import "../styles/Users.css";

function Users() {
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    //ID or the whole user?
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || params.userid != user.id) {
      navigate("/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="users-conteainer">
      <nav className="nav-bar">
        <ul className="nav-list">
          <li>
            <Link to="cart" className="nav-link">
              Cart
            </Link>
          </li>
          <li className="nav-item">
            <Link to="bought" className="nav-link">
              Bought
            </Link>
          </li>
          <li>
            <Link to="shop" className="nav-link">
              Shop
            </Link>
          </li>
          <li>
            <Link to="info" className="nav-link">
              Info
            </Link>
          </li>
          <li className="nav-item">
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
export default Users;
/*
<Link to="http://localhost:3000/login" className="nav-link">
              Logout
            </Link>
            <button onClick={handleLogout} className="nav-link">
              Logout
            </button>
*/
