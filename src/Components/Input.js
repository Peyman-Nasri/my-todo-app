import React from "react";
import { useState } from "react";
import "./Input.css";

function Input({ data, setData }) {
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");

  const addToDo = () => {
    const task = {
      id: Math.floor(Math.random() * 10000),
      title: Title,
      desc: Desc,
      data: new Date(),
    };
    setTitle("");
    setDesc("");

    const tasks = [...data, task];

    setData(tasks);

    localStorage.setItem("toDo", JSON.stringify(tasks));
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    setData([])
  };
  return (
    <>
      <p>Add Todo List</p>
      <span className="title">
        Title:
        <input
          type="text"
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </span>
      <span className="desc">
        Description:
        <textarea
          type="text"
          value={Desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </span>

      <button onClick={addToDo}>Add Todo</button>
      <button onClick={clearLocalStorage}>Clear History</button>
    </>
  );
}

export default Input;
