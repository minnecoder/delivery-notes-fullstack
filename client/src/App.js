import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import StopList from "./components/StopList";
import AddNote from "./components/AddNote";
import UpdateNote from "./components/UpdateNote";

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/stops" component={StopList} />
          <Route path="/add" exact component={AddNote} />
          <Route path="/update" exact component={UpdateNote} />
        </Switch>
      </HashRouter>
    );
  }
}
