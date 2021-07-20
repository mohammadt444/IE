import React from "react";
import { Switch, Route } from "react-router-dom";

import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import SearchPanel from "./components/searchPanel/searchPanel";
import ProductBox from "./components/productBox/productBox";
import SortBox from "./components/sortBox/sortBox";
import Profile from "../pages/profile/profile";
import CategoryPanel from "./components/categoryPanel/categoryPanel";
import Home from "../pages/home/home";
import Login from "../pages/login/login";

function App() {
  return (
    <div
      style={{
        display: "flex",
        // flexDirection: "column",
        height: "100%",
        justifyContent: "center",
      }}
      className="App"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          maxWidth: 1280,
          width: "100%",
          backgroundColor: "rgb(247, 247, 247)",
        }}
      >
        <Header />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            overflow: "auto",
          }}
        >
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
