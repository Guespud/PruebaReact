import React, { useState } from "react";
import Input from "./componentes/inputs /Inputs";
import Label from "./componentes/label/Label";
import Tittle from "./componentes/tittles/Tittle";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(name, value) {
    if (name == "usuario") {
      setUser(value);
    } else {
      setPassword(value);
    }
  }

  function Login() {
    let account = { user, password };
    if (account) {
      console.log("account", account);
    }
  }

  return (
    <div className="login-container">
      <div className="background-login">
        <div className="txt-prueba ">
          <text className="empresa">
            Aplicación 
            <br/> 
            OLSoftware
          </text>
          <br />
          <text className="tipo">Prueba práctica Front-end senior</text>
        </div>
        <div className="card-login">
          <Tittle text="Inicio de sesión" />
          <form className="Login">
            <div class="form-group">
              <Input
                attribute={{
                  id: "usuario",
                  name: "usuario",
                  type: "text",
                  placeholder: "Usuario",
                }}
                handlechage={handleChange}
              />
              <Input
                attribute={{
                  id: "contrasena",
                  name: "contrasena",
                  type: "password",
                  placeholder: "contraseña",
                }}
                handlechage={handleChange}
              />
            </div>

            <button className="btn btn-primary btnlogin" onClick={Login}>
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
