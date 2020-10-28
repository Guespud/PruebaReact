import Login from "./paginas/login/Login";
import Administrativo from './paginas/administrador/administrador';
import Usuario from './paginas/usuario/Usuario'
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/usuario">
            <Usuario />
          </Route>
        <Route path="/administrativo">
            <Administrativo />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
