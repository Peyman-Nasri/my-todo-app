import React from "react";
import { Delete, Edit } from "@mui/icons-material";
import dayjs from "dayjs";
import { Grid, Paper } from "@mui/material";

const Todolistitem = ({
  deleteTodo,
  editTodo,
  todoData: { title, desc, date, id },
}) => {
  // const { title, desc, date, id, deleteTodo } = todoData

  return (
    <>
      <Paper>
        <Grid container padding="1em">
          <Grid item xs={4}>
            <b>{title}</b>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={1}>
            <Edit style={{ cursor: "pointer" }} onClick={() => editTodo(id)} />
          </Grid>
          <Grid item xs={1}>
            <Delete
              style={{ cursor: "pointer" }}
              onClick={() => deleteTodo(id)}
            />
          </Grid>

          <Grid item xs={12} style={{ minHeight: "3em" }}>
            <ul>
              <li>
                <i>{desc}</i>
              </li>
            </ul>
          </Grid>
          <Grid item xs={10}></Grid>
          <Grid item xs={2}>
            {dayjs(date).format("D MMM YYYY")}
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Todolistitem;
