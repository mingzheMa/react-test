import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

function PageA() {
  return <h1>Page A</h1>;
}

function PageB() {
  return <h1>Page B</h1>;
}

function PageC() {
  return <h1>Page C</h1>;
}

export default function Page2() {
  return (
    <Router>
      <Link to="/page2/a">to a</Link>
      <br />
      <Link to="/page2/b">to b</Link>
      <br />
      <Link to="/page2/c">to c</Link>
      <br />

      <Switch>
        <Route path="/page2/a" exact component={PageA} />
        <Route path="/page2/b" exact component={PageB} />
        <Route path="/page2/c" exact component={PageC} />
        <Redirect to="/page2/a" />
      </Switch>
    </Router>
  );
}
