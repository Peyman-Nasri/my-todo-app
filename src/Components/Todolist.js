import React from "react";

function Todolist({ data }) {
  return (
    <>
      <div>
        {data.map(({ title, desc }) => (
          <>
            <p key={data.id} >
              Title: <b>{title}</b>
            </p>
            <p key={data.id} >
              Desc: <b>{desc}</b>
            </p>
          </>
        ))}
      </div>
    </>
  );
}

export default Todolist;
