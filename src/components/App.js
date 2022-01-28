import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

const [color, setColor] = useState(true)

const appClass = color ? "App dark" : "App light"


  function changeColor() {

    setColor((color) => !color)
  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeColor}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
