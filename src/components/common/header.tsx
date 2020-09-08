import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const activeStyle = { color: "#F15B2A" };

  return (
    <nav>
      <NavLink exact to="/" activeStyle={activeStyle}>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
      {" | "}
      <NavLink to="/courses" activeStyle={activeStyle}>
        Courses
      </NavLink>
    </nav>
  );
};