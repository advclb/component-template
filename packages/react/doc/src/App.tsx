import React, { ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as pages from "./pages";

export default function App(): ReactElement {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {Object.values(pages).map((p) => (
              <li key={p.meta.path}>
                <Link to={p.meta.path}>{p.meta.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Switch>
          {Object.values(pages).map((p) => (
            <Route path={p.meta.path} key={p.meta.path} component={p} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}
