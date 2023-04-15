import React from "react";
import {
  Container,
  Box,
  AppBar,
  Toolbar,
  Typography,
  ThemeProvider,
  createTheme,
  Button,
  Avatar,
} from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import UserdataPage from "../Pages/UserdataPage";
import TodoPage from "../Pages/TodoPage";
import UserPage from "../Pages/UserPage";
import { red } from "@mui/material/colors";
import ContactMePage from "../Pages/ContactMePage";
import AboutMePage from "../Pages/AboutMePage";
// import { useDispatch } from "react-redux"
// import { DECREASE_COUNTER, INCREASE_COUNTER, RESET_COUNTER, _666 } from "../redux/constants/counterConstants"

const customTheme = createTheme({
  palette: {
    primary: {
      main: red[400],
    },
  },
});
function App() {
  // const dispatch = useDispatch()

  return (
    <ThemeProvider theme={customTheme}>
      {/* using Link outside the Routes since we want to run it once and have them available in the whole app */}
      <Container maxWidth="xl" style={{ padding: "0" }}>
        <Box sx={{ flexGrow: 1 }}>
          {/* <Button variant="outlined" onClick={() => dispatch({type: DECREASE_COUNTER})}>-</Button>
        <Button variant="contained" onClick={() => dispatch({type: INCREASE_COUNTER})}>+</Button>
        <Button onClick={() => dispatch({type: RESET_COUNTER, payload: 0})}>Reset</Button>
        <Button onClick={() => dispatch({type: _666, payload: 666})}>666</Button> */}

          <AppBar
            position="static"
            style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <Toolbar container>
              <Typography
                item
                variant="h5"
                component="div"
                sx={{ flexGrow: 0.2 }}
              >
                <Button>
                  <Link to="/">Home Page</Link>
                </Button>
              </Typography>
              <Typography
                item
                variant="h5"
                component="div"
                sx={{ flexGrow: 0.2 }}
              >
                <Button>
                  <Link to="/aboutme">About Me</Link>
                </Button>
              </Typography>
              <Typography
                item
                variant="h5"
                component="div"
                sx={{ flexGrow: 0.2 }}
              >
                <Button>
                  <Link to="/todo">ToDo List</Link>
                </Button>
              </Typography>
              <Typography
                item
                variant="h5"
                component="div"
                sx={{ flexGrow: 0.2 }}
              >
                <Button>
                  <Link to="/userdata">User Data</Link>
                </Button>
              </Typography>
              <Typography
                item
                variant="h5"
                component="div"
                sx={{ flexGrow: 0.2 }}
              >
                <Button>
                  <Link to="/contactme">Contact Me</Link>
                </Button>
              </Typography>
              <Typography
                item
                variant="h5"
                component="div"
                sx={{ flexGrow: 0.08, marginLeft: 100 }}
              >
                <Avatar
                  alt="My Picture"
                  src="mypic.jpg"
                  sx={{ width: 54, height: 54 }}
                />
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        {/* defining the routes here for link pages */}
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/aboutme" element={<AboutMePage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/userdata" element={<UserdataPage />} />
          <Route path="/userdata/:userId" element={<UserPage />} />
          <Route path="/contactme" element={<ContactMePage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
