import React, { useState } from "react";
import "./App.css";

function App() {
  const todoData = [
    {
      id: 1,
      item: "Apple",
    },
    {
      id: 2,
      item: "Computer",
    },
    {
      id: 3,
      item: "Paper",
    },
    {
      id: 4,
      item: "Love",
    },
  ];

  const deleteTaskItems = (event) => {
    const element = event.target;
    element.classList.toggle("done");
  };

  return (
    <div>
      <h1>Todo List</h1>

      <ul>
        {todoData.map((items) => {
          return <li onClick={deleteTaskItems}>{items.item}</li>;
        })}
      </ul>

      <form>
        <input type="text" />
        <button>Delete</button>
        <button onClick={() => console.log("button works")}>Edit</button>
      </form>
    </div>
  );
}

export default App;

/**
 * create the data
 * loop through the data and output to the UI
 * user adds a new item to the list
 * user deletes a task when its checked
 * user marks task as complete (line through over text)
 *
 */
