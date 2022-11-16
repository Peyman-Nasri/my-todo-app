import React from "react";
import "./App.css";
import { Container, Box, AppBar, Toolbar, Typography } from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import UserdataPage from "../Pages/UserdataPage"
import TodoPage from "../Pages/TodoPage"
import SandboxPage from "../Pages/SandboxPage"


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
                <Link to="/todo">ToDo</Link>
              </Typography>
              <Typography variant="h5" component="div" sx={{ flexGrow: 0.1 }}>
                <Link to="/userdata">UserData</Link>
              </Typography>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/sandboxpage">SandboxPage</Link>
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/todo" element={<TodoPage />}></Route>
          <Route path="/userdata" element={<UserdataPage />}></Route>
          <Route path="/sandboxpage" element={<SandboxPage />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
