import React, { useState } from "react";
import ToDoList from "./ToDoList";
import "./App.css"

const App = () => {
  const [inputList, setInputList] = useState("");

  const [items, setItems] = useState([]);

  const itemAdd = (event) => {
    setInputList(event.target.value);
  };

  const addListItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const removeItems = (id) => {
    // console.log('deleted');
    setItems((oldItems) => {
      return oldItems.filter((arrayElement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div bg-light">
        <div className="center_div">
          <br />
          <h2>ToDo List</h2>
          <br />
          <div className="card p-3 shadow-lg">
            <div className="input-group">
              <input
                type="text"
                value={inputList}
                placeholder="Add a Item"
                className="form-control"
                onChange={itemAdd}
              />
              <button className="btn btn-primary fw-bolder" onClick={addListItem}> + </button>
            </div>
            <ul className="pt-4 fw-bolder list-group">
              {/* <li>{inputList}</li> */}
              {items.map((itemValue, index) => {
                return (
                  <ToDoList
                    key={index}
                    id={index}
                    onSelect={removeItems}
                    text={itemValue}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
