import React from "react";
import "./App.css";

import Home from "./pages/home";
import Rooms from "./pages/rooms";
import SingleRoom from "./pages/singleroom";
import Error from "./pages/Error";

import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Route component={NavBar} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
