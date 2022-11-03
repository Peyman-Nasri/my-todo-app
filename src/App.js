import React, { useState } from "react";
import "./App.css";

function App() {
  // State
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [Data, setData] = useState(JSON.parse(localStorage.getItem("toDo")));

  // add todo
  const addToDo = () => {
    const task =
      {
        id: 1,
        title: Title,
        desc: Desc,
        data: new Date(),
      }
    
      setData(task)

    //local storage
    localStorage.setItem("toDo", JSON.stringify(task));
  };

  // Render
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

      <div>
        <b>Title: </b>
        <p>{Data?.title}</p>
        <b>Desc: </b>
        <p>{Data?.desc}</p>
      </div>
    </>
  );
}

export default App;
