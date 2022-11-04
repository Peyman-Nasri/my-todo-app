import React from "react";

function Todolist({ data }) {
  return (
    <>
      <div>
        {data.map(({ title, desc }) => (
          <>
            <p>
              Title: <b>{title}</b>
            </p>
            <p>
              Desc: <b>{desc}</b>
            </p>
          </>
        ))}
      </div>
    </>
  );
}

export default Todolist;
