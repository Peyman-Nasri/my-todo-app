import React from "react";
import { Delete, Edit } from "@mui/icons-material";
import dayjs from "dayjs";
import { Card, Grid, IconButton } from "@mui/material";
import styled from "@emotion/styled";

export const StyledButton = styled(IconButton)`
  ${({ theme }) => `
  cursor: pointer;
  color: white;
  background-color: ${theme.palette.primary.main};
  transition: ${theme.transitions.create(["background-color", "transform"], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    background-color: ${theme.palette.secondary.main};
    transform: scale(1.3);
  }
  `}
`;

const Todolistitem = ({
  deleteTodo,
  editTodo,
  todoData: { title, desc, date, id },
}) => {
  // const { title, desc, date, id, deleteTodo } = todoData

  return (
    <>
      <Card>
        <Grid container padding="1em">
          <Grid item lg={6} md={6} sm={6} xs={7}>
            <b>{title}</b>
          </Grid>
          <Grid item lg={5} md={3} sm={3} xs={4}>
            {dayjs(date).format("D MMM YYYY")}
          </Grid>
          <Grid item lg={0.5} md={1} sm={1} xs={2}>
            <StyledButton
              aria-label="edit"
              title="Edit the task"
              style={{ cursor: "pointer" }}
              onClick={() => editTodo(id)}
            >
              <Edit />
            </StyledButton>
          </Grid>
          <Grid item lg={0.5} md={1} sm={1} xs={2}>
            <StyledButton
              aria-label="delete"
              title="Delete the task"
              style={{ cursor: "pointer" }}
              onClick={() => deleteTodo(id)}
            >
              <Delete />
            </StyledButton>
          </Grid>
          <Grid item lg={10} md={10} sm={10} xs={6}>
            <ul>
              <li>
                <i>{desc}</i>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default Todolistitem;
