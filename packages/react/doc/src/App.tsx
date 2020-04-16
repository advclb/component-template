import React, { ReactElement, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import cn from "classnames";
import * as pages from "./pages";
import "@advclb/design-system-css/doc-app.css";

export default function App(): ReactElement {
  const [theme, setTheme] = useState("");
  document.body.className = theme;
  return (
    <Router>
      <div className={cn("doc-app", theme)}>
        <aside className="doc-app__side">
          <ul>
            {Object.values(pages).map((p) => (
              <li key={p.meta.path}>
                <Link to={p.meta.path}>{p.meta.name}</Link>
              </li>
            ))}
          </ul>
          <select
            onChange={(e): void => setTheme(e.target.value)}
            onBlur={(e): void => setTheme(e.target.value)}
          >
            <option value="">Auto</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
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
