import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav({ nav }) {
  return <NavLink to="/">{nav.name}</NavLink>;
}
