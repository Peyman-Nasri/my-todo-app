import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App";
import { BrowserRouter } from "react-router-dom";

//why index.js because rendering happens here since the root id from index.html(single page application) has defined here
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //using browserRouter here since we want to ReactRoute be available for the whole app
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
