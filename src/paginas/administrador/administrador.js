import React from "react";
import Login from "../login/Login";
import NavbarMenu from "../navbar/Navbar";
import Usuario from "../usuario/Usuario";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const adminsitrador = (handleLogout) => {
  return (
    <section className="administrador">
      <NavbarMenu />
    </section>
  );
};

export default adminsitrador;
