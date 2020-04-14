import React, { ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as pages from "./pages";
import "@advclb/design-system-css/doc-app.css";

export default function App(): ReactElement {
  return (
    <Router>
      <div className="doc-app">
        <aside className="doc-app__side">
          <ul>
            {Object.values(pages).map((p) => (
              <li key={p.meta.path}>
                <Link to={p.meta.path}>{p.meta.name}</Link>
              </li>
            ))}
          </ul>
        </aside>

        <main className="doc-app__main">
          <Switch>
            {Object.values(pages).map((p) => (
              <Route path={p.meta.path} key={p.meta.path} component={p} />
            ))}
          </Switch>
        </main>
      </div>
    </Router>
  );
}
