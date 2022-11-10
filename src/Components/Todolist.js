import React from "react";
import Todolistitem from "./Todolistitem";
import { Grid } from "@mui/material";

//add to list
function Todolist({ data, deleteTodo, editTodo }) {
  return (
    <>
      <Grid container direction="column" rowGap={2}>
        {data.map((todoData) => (
          <Todolistitem
            key={todoData.id}
            todoData={todoData}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </Grid>
    </>
  );
}

export default Todolist;
