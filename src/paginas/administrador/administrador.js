import React from "react";
import Login from "../login/Login";
import NavbarMenu from "../navbar/Navbar";
import Usuario from "../usuario/Usuario";
import logo from '../../utils/imagenes/logo.svg'
import './Administrativo.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const adminsitrador = (handleLogout) => {
  return (
    <section className="administrador">
      <NavbarMenu />
      <div className="container-txt-prueba">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="txt-presentacion">
          Bienvenidos a mi prueba de ReactJS
        </h1>
      </div>
    </section>
  );
};

export default adminsitrador;
