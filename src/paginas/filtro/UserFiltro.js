import React from "react";
import * as RiIcons from "react-icons/ri";
import { Form, Container, Row,Button } from "react-bootstrap";
import "./UserFiltro.css";

const UserFiltro = () => {
  return (
    <div className="container-filtro">
      <Container className="card-filtro">
        <div className="container-tittle">
          <h2 className="tittle-txt-filtro">
            <RiIcons.RiUserSearchFill />
            Filtrar búsqueda
          </h2>
        </div>
        <Form className="form-filtro">
          <Form.Group controlId="name">
            <Form.Label className="input-txt-filtro">Nombre</Form.Label>
            <Form.Control className="input-filtro" name="name" type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label className="input-txt-filtro">Apellido</Form.Label>
            <Form.Control
              className="input-filtro"
              name="lastName"
              type="text"
            />
          </Form.Group>
          <Form.Group controlId="identification">
            <Form.Label className="input-txt-filtro">
              Identificacion(C.C)
            </Form.Label>
            <Form.Control
              className="input-filtro"
              name="identification"
              type="number"
            />
          </Form.Group>
          <Form.Group controlId="role">
            <Form.Label className="input-txt-filtro">Rol</Form.Label>
            <Form.Control className="input-filtro" name="role" type="text" />
          </Form.Group>
          <Form.Group controlId="state">
            <Form.Label className="input-txt-filtro">Estado</Form.Label>
            <Form.Control className="input-filtro" name="state" type="text" />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label className="input-txt-filtro">Contraseña</Form.Label>
            <Form.Control
              className="input-filtro"
              name="password"
              type="password"
            />
          </Form.Group>
          <Form.Group controlId="number">
            <Form.Label className="input-txt-filtro">Telefono</Form.Label>
            <Form.Control
              className="input-filtro"
              name="number"
              type="number"
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label className="input-txt-filtro">Email</Form.Label>
            <Form.Control className="input-filtro" name="email" type="mail" />
          </Form.Group>
          <br></br>
        </Form>
        <div>
          <Button className="btn-limpiar" variant="success" type="submit">
            Limpiar
          </Button>
          <Button className="btn-filtrar" variant="light" type="submit">
            Filtrar
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default UserFiltro;
