import React, {useState} from "react"
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCatagory] = useState("All")
  // console.log(items)


function handleCatagoryChange(event) {

    setSelectedCatagory(event.target.value)

}

const filterArray = items.filter(item => {

  return selectedCategory === "All" || item.category === selectedCategory
  // if (selectedCategory === "All") return true;
  // return item.category === selectedCategory
})

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter"
        onChange={handleCatagoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filterArray.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
