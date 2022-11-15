import React from "react";
import Todo from "./Todo";
import "./App.css";
import { Container, Box, AppBar, Toolbar, Typography } from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
import Sandbox from "./Sandbox";
import HomePage from "../Pages/HomePage";

function App() {
  return (
    <>
      <Container maxWidth="md" style={{ padding: "3em 0" }}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h5" component="div" sx={{ flexGrow: 0.1 }}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  HomePage
                </Link>
              </Typography>
              <Typography variant="h5" component="div" sx={{ flexGrow: 0.1 }}>
                <Link to="/todo" style={{ textDecoration: "none" }}>
                  Todo
                </Link>
              </Typography>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/sandbox" style={{ textDecoration: "none" }}>
                  Sandbox
                </Link>
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
          <Route path="/sandbox" element={<Sandbox />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
