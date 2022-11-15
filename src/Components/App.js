import React from "react";
import Todo from "./Todo";
import "./App.css";
import { Container, Box, AppBar, Toolbar, Typography } from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import SandboxPage from "../Pages/SandboxPage"
import TodoPage from "../Pages/TodoPage"

function App() {
  return (
    <>
      <Container maxWidth="md" style={{ padding: "3em 0" }}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h5" component="div" sx={{ flexGrow: 0.1 }}>
                <Link to="/">HomePage</Link>
              </Typography>
              <Typography variant="h5" component="div" sx={{ flexGrow: 0.1 }}>
                <Link to="/todo">Todo</Link>
              </Typography>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/sandbox">Sandbox</Link>
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/todo" element={<TodoPage />}></Route>
          <Route path="/sandbox" element={<SandboxPage />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
