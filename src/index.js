import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App";
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux'
import store from "./redux/store"


//why index.js because rendering happens here since the root id from index.html(single page application) has defined here
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //using browserRouter here since we want to ReactRoute be available for the whole app
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);