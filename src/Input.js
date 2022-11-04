import React from "react";
import { useState } from "react";

function Input({ data, setData }) {
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");

  const addToDo = () => {
    const task = {
      id: 1,
      title: Title,
      desc: Desc,
      data: new Date(),
    };

    const tasks = [...data, task];

    setData(tasks);

    localStorage.setItem("toDo", JSON.stringify(tasks));
  };
  return (
    <>
      <span>title</span>
      <input
        type="text"
        value={Title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <span>desc</span>
      <textarea
        type="text"
        value={Desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      <button onClick={addToDo}>Add todo</button>
    </>
  );
}

export default Input;
