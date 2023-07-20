import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
//import "../styles/Bought.css";

function Bought() {
  const params = useParams();
  const [items, setItems] = useState([]);
  

  function displayItems(){
    if(items==[]){
        return <div>you did not purchase anything yet</div>
    }
  }
  
  
  

  return (
    <div>
      <div>{displayItems()}</div>
    </div>
  );
}

export default Bought;
