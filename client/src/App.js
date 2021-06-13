import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components"
import Login from "./components/Login";
import StopList from "./components/StopList";
import AddNote from "./components/AddNote";
import UpdateNote from "./components/UpdateNote";
import Register from "./components/Register";
import Demo from "./components/Demo";

const GlobalStyle = createGlobalStyle`
html {
  margin: 0;
  padding: 0;
  background: #C0C6C8;
}
`

export default function App() {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/stops" component={StopList} />
          <Route path="/add" exact component={AddNote} />
          <Route path="/update" exact component={UpdateNote} />
          <Route path="/register" exact component={Register} />
          <Route path="/demo" exact component={Demo} />
        </Switch>
      </HashRouter>
    </>
  );
}
