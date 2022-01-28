import React, {useState} from "react"


function Item({ name, category }) {

const [cart, setCart] = useState(false)

const cartClass = cart ? "Add to Cart" : ""

function inCart(){

  setCart((cart) => !cart)

}

  

  return (
    <li className={cart ? "Add to Cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={inCart} className="add">{cart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
