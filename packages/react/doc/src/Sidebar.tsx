import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import * as pages from "./pages";
import pkg from "../../package.json";

export type SidebarProps = {
  theme: string;
  setTheme: (theme: string) => void;
};

export default function Sidebar({
  theme,
  setTheme,
}: SidebarProps): ReactElement {
  return (
    <aside className="doc-sidebar">
      <header className="doc-sidebar-header">
        <strong>{pkg.name}</strong>
        <div>{pkg.version}</div>
      </header>
      <nav className="doc-sidebar__nav">
        {Object.values(pages)
          .filter((p) => !p.meta.group)
          .map((p) => (
            <NavLink
              key={p.meta.path}
              className="doc-sidebar__nav-item"
              to={p.meta.path}
            >
              {p.meta.name}
            </NavLink>
          ))}
        <p className="doc-sidebar__nav-group-title">Controls</p>
        {Object.values(pages)
          .filter((p) => p.meta.group === "controls")
          .map((p) => (
            <NavLink
              key={p.meta.path}
              className="doc-sidebar__nav-item"
              to={p.meta.path}
            >
              {p.meta.name}
            </NavLink>
          ))}
        <p className="doc-sidebar__nav-group-title">Blocks</p>
        {Object.values(pages)
          .filter((p) => p.meta.group === "blocks")
          .map((p) => (
            <NavLink
              key={p.meta.path}
              className="doc-sidebar__nav-item"
              to={p.meta.path}
            >
              {p.meta.name}
            </NavLink>
          ))}
        <p className="doc-sidebar__nav-group-title">Layouts</p>
        {Object.values(pages)
          .filter((p) => p.meta.group === "layouts")
          .map((p) => (
            <NavLink
              key={p.meta.path}
              className="doc-sidebar__nav-item"
              to={p.meta.path}
            >
              {p.meta.name}
            </NavLink>
          ))}
        <p className="doc-sidebar__nav-group-title">Utilities</p>
        {Object.values(pages)
          .filter((p) => p.meta.group === "utilities")
          .map((p) => (
            <NavLink
              key={p.meta.path}
              className="doc-sidebar__nav-item"
              to={p.meta.path}
            >
              {p.meta.name}
            </NavLink>
          ))}
      </nav>
      <label>
        Theme:&nbsp;
        <select
          value={theme}
          onChange={(e): void => setTheme(e.target.value)}
          onBlur={(e): void => setTheme(e.target.value)}
        >
          <option value="">Auto</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
    </aside>
  );
}
