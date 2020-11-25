import React from 'react';
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div id="app">
          <Navbar></Navbar>
          <main>

            <Switch>
              <Route path="./">

              </Route>
              <Route path="./about">

              </Route>
              <Route path="./projects">

              </Route>
              <Route path="./contact">

              </Route>
            </Switch>

          </main>
        </div>
      </Router>
    )
  }
}

export default App;
