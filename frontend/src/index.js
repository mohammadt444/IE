import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./app/main/App";
import { BrowserRouter as Router } from "react-router-dom";
import ContextProvider from "./setup/store";

ReactDOM.render(
  <ContextProvider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ContextProvider>,
  document.getElementById("root")
);
