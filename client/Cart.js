import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
//import "../styles/Cart.css";

function Cart() {
  const params = useParams();
  const [items, setItems] = useState([]);
  

  function displayItems(){
    if(items==[]){
        return <div>your cart is empty</div>
    }
  }
  
  
  

  return (
    <div>
      <div>{displayItems()}</div>
      <button>Checkout</button>
    </div>
  );
}

export default Cart;
