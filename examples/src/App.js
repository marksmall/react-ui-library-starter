import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { LoadMask, Button } from "ui-library";

import styles from "./App.module.css";

const App = () => (
  <Router>
    <header>
      <h3>A list of components</h3>
    </header>

    <main className={styles.App}>
      {/* <LoadMask /> */}
      <ul>
        <li>
          <Link to="/loadmask">Load Mask</Link>
        </li>
        <li>
          <Link to="/button">Button</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/loadmask" component={LoadMask} />
        <Route exact path="/button" component={Button} />
      </Switch>
    </main>
  </Router>
);

export default App;
