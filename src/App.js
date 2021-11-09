import React, { useState } from "react";
import "./App.css";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import Form from "./components/Form";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name) {
    const newTask = { id: "id", name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id) {
    const updatedTask = tasks.map((task) => {
      if (id === tasks.id) {
        return { ...tasks, completed: !tasks.completed };
      }
      return task;
    });
    setTasks(updatedTask);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }
  return (
    <div className="todoapp stack-large">
      <Form addTask={addTask} />
      <h1>Todo</h1>
      <div className="filters btn-group stack-exception">
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {tasks.map((items) => {
          return (
            <Todo
              name={items.name}
              completed={items.completed}
              id={items.id}
              key={items.id}
              toggleTaskCompleted={toggleTaskCompleted}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          );
        })}
      </ul>
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
