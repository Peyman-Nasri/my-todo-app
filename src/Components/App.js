import React from "react";
import "./App.css";
import { Container, Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import UserdataPage from "../Pages/UserdataPage";
import TodoPage from "../Pages/TodoPage";
import SandboxPage from "../Pages/SandboxPage";
import UserPage from "../Pages/UserPage";
import { useDispatch } from "react-redux"
import { DECREASE_COUNTER, INCREASE_COUNTER, RESET_COUNTER, _666 } from "../redux/constants/counterConstants"

function App() {

  const dispatch = useDispatch()

  return (
    <>
      {/* using Link outside the Routes cause we want to run it once and have them available in the whole app */}
      <Container maxWidth="md" style={{ padding: "3em 0" }}>
        <Box sx={{ flexGrow: 1 }}>
          
        <Button variant="outlined" onClick={() => dispatch({type: DECREASE_COUNTER})}>-</Button>
        <Button variant="contained" onClick={() => dispatch({type: INCREASE_COUNTER})}>+</Button>
        <Button onClick={() => dispatch({type: RESET_COUNTER, payload: 0})}>Reset</Button>
        <Button onClick={() => dispatch({type: _666, payload: 666})}>666</Button>
          
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
        {/* defining the routes here for link pages */}
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/userdata" element={<UserdataPage />} />
          <Route path="/userdata/:userId" element={<UserPage />} />
          <Route path="/sandboxpage" element={<SandboxPage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
