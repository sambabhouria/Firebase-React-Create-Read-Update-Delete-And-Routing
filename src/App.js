import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import UserApp from "./components/users";
import TutorialsApp from "./components/tutorials";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          users
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
              Tutorials
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <h2>React Firebase Hooks CRUD</h2>
        <Switch>
          <Route exact path={["/"]} component={UserApp} />
          <Route exact path="/tutorials" component={TutorialsApp} />
        </Switch>
      </div>

    </div>
  );
}

export default App;
