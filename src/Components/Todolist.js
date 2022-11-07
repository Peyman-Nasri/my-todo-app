import React from "react";

function Todolist({ data }) {
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
          </div>
        ))}
      </div>
    </>
  );
}

export default Todolist;
