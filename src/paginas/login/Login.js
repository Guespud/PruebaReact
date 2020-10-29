import React, { useState } from "react";
import Input from "./componentes/inputs /Inputs";
import Tittle from "./componentes/tittles/Tittle";
import fire from "../../utils/firebase-config";
import * as FcIcons from "react-icons/fc";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import 'react-block-ui/style.css';

const Login = () => {

  //-------------------------------//
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [hasAccount, setHasAccount] = useState(false);

  const history = useHistory();

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  function handleChange(name, value) {
    if (name == "usuario") {
      setEmail(value);
    } else {
      if (value.Length < 6) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
        setPassword(value);
      }
    }
  }

  const handleLogin = (event) => {
    console.log('Entro en el login ');
    event.preventDefault();
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password).then(() => {
        console.log('redirigiendo');
        history.push("/administrativo")
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disable":
          case "auth/user-not.found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    console.log('desloguearse')
    fire.auth().signOut();
    history.push("/")
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  const useEffect = ( () => {
    authListener();
  }, [] )

  return (
    <div className="login-container">
   <div className="background-login">
        <div className="txt-prueba ">
          <text className="empresa">
            Aplicación
            <br />
            OLSoftware
          </text>
          <br />
          <text className="tipo">Prueba práctica Front-end senior</text>
        </div>
        <div className="card-login">
          <Tittle text="Inicio de sesión" />
          <form className="Login" onSubmit={handleLogin} >
            <div class="form-group">
              <label className="icon-usuario"><FcIcons.FcBusinessman/></label>
              <Input              
              className="input-usuario"
                attribute={{
                  id: "usuario",
                  name: "usuario",
                  type: "text",
                  placeholder: "Usuario",
                }}
                handlechage={handleChange}
              />
              <p className="errorMsg"> {emailError}</p>
              <Input
              className="input-contrasena"
                attribute={{
                  id: "contrasena",
                  name: "contrasena",
                  type: "password",
                  placeholder: "contraseña",
                }}
                handlechage={handleChange}
                param={passwordError}
              />
              <p className="errorMsg"> {passwordError}</p>
            </div>
            <div className="btnContainer">
              <button className="btn btn-primary btnlogin" type="submit" >Iniciar sesión</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
