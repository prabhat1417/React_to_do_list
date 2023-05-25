import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);

  function handleChange(event) {
    const { value } = event.target;
    setItem(value);
  }

  function handleAdd() {
    setItemList((prevItemList) => [...prevItemList, item]);
    setItem("");
  }

  function handleRemove(index) {
    setItemList((prevItemList) => {
      const updatedList = [...prevItemList];
      updatedList.splice(index, 1);
      return updatedList;
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} name="item" type="text" value={item} />
        <button onClick={handleAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemList.map((item, index) => (
            <li key={index}>
              {item}
              <button className="rem" onClick={() => handleRemove(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
