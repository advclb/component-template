import React, { ReactElement, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import cn from "classnames";
import * as pages from "./pages";
import Sidebar from "./Sidebar";

export default function App(): ReactElement {
  const [theme, setTheme] = useState("");
  document.body.className = theme;
  return (
    <Router>
      <div className={cn("doc-app", theme)}>
        <Sidebar theme={theme} setTheme={setTheme} />
        <main className="doc-app__main">
          <Switch>
            {Object.values(pages).map((p) => (
              <Route exact path={p.meta.path} key={p.meta.path} component={p} />
            ))}
          </Switch>
        </main>
      </div>
    </Router>
  );
}
