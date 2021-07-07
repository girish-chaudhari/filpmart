import React from "react";
import "./ToDoList.css";

const ToDoList = (props) => {
  return (
    <>
      <div className="todo">
        <div className="left">
          <i
            className="fa fa-times"
            aria-hidden="true"
            onClick={() => {
              props.onSelect(props.id);
            }}
          />
        </div>

        <div className="right">
          <li className="list-group-item  text-primary text-capitalize">
            {props.text}
          </li>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
