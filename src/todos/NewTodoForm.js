import React, { useState } from "react";
import "./NewTodoForm.css";

const NewTodoForm = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="new-todo-form card mt-5 mb-5">
      <div className="card-body">
        <div className="row">
          <div className="col-8">
            <input
              className="new-todo-input"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your new todo here"
            />
          </div>
          <div className="col-4">
            <button className="new-todo-button">Create Todo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTodoForm;
