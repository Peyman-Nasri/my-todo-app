import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import dayjs from "dayjs";

//add to list
function Todolist({ data, deleteTodo }) {
  return (
    <>
      <div>
        {data.map(({ title, desc, id, date }) => (
          <div key={id}>
            <p>
              Title: <b>{title}</b>
            </p>
            <p>
              Description: <b>{desc}</b>
            </p>
            <DeleteIcon
              style={{ cursor: "pointer" }}
              onClick={() => deleteTodo(id)}
            />

            {/* <button onClick={() => deleteTodo(id)}>delete</button> */}

            {dayjs(date).format("D MMM YYYY")}
          </div>
        ))}
      </div>
    </>
  );
}

export default Todolist;
