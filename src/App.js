import React, { useState } from "react";
import "./App.css";

function App() {
  // State
  const [Title, setTitle] = useState("");
  const [Data, setData] = useState({ title: "", desc: "" });

  // add todo
  const addTodo = () => {
    setData({
      id: 1,
      title: Title,
      desc: "",
      data: new Date(),
    });
  };

  console.log(Data);

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
      <textarea />
      <button onClick={addTodo}>Add todo</button>

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
