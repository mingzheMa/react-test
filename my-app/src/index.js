import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import BackAdministration from "./layouts/BackAdministration/index";
import Login from "./pages/back-administration/login/index";
import Index from "./pages/back-administration/index/index";
import Page1 from "./pages/back-administration/page1/index";
import Page2 from "./pages/back-administration/page2/index";
import Page3 from "./pages/back-administration/page3/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route
          path="/page1"
          exact
          component={() => <BackAdministration content={<Page1 />} />}
        />
        <Route
          path="/page2"
          exact
          component={() => <BackAdministration content={<Page2 />} />}
        />
        <Route
          path="/page3"
          exact
          component={() => <BackAdministration content={<Page3 />} />}
        />
        <Route
          path="/"
          component={() => <BackAdministration content={<Index />} />}
        />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
