import React from "react";

//add to list
function Todolist({ data, deleteTodo }) {
  return (
    <>
      <div>
        {data.map(({ title, desc, id }) => (
          <div key={id}>
            <p>
              Title: <b>{title}</b>
            </p>
            <p>
              Desc: <b>{desc}</b>
            </p>
            <button onClick={() => deleteTodo(id)}>delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Todolist;
