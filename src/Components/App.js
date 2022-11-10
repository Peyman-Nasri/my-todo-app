import React from "react";
import Todo from "./Todo";
import "./App.css";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <Container maxWidth='md' style={{padding: '3em 0'}}>
        <Todo />
      </Container>
    </>
  );
}

export default App;
