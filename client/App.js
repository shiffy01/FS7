import "./App.css";
import Login from "./components/Login";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Todos from "./components/Todos";
import Info from "./components/Info";
import Error from "./components/Error";
import Comments from "./components/Comments";
import Register from "./components/register";

import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/users/:userid" element={<Users />}>
        <Route path="cart" element={<Cart />} />
        <Route path="bought" element={<Bought />} />
        <Route path="shop" element={<Shop />} >
            <Route path="electronics" element={<Electronics />} />
            <Route path="jewelery" element={<Jewelery />} />
            <Route path="men's clothing" element={<Mens />} />
            <Route path="women's clothing" element={<Women />} />
        </Route>
        <Route path="info" element={<Info/>}/>
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
export default App;
//maybe dont do an element for every category...