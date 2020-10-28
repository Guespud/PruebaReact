import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Modal, Button, Form, Row, Col, Container } from "react-bootstrap";
import fire from "../../utils/firebase-config";
import "./CreateUser.css";

const CreateUSer = () => {
  let db = fire.firestore();
  db.settings({});

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    event.persist();
    if (event.target.name === "") {
      return;
    }
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));

    console.log(inputs);
  };

  const handleSaveDb = () => {
    console.log("Se creo123");
    fire.database().ref('usuarios').push(inputs);
  };

  return (
    <>
      <h2 className="txt-usuarios">
        <FaIcons.FaUsers /> &nbsp; Usuarios existentes{" "}
      </h2>
      <Button className="btn-create" variant="primary" onClick={handleShow}>
        Crear
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Container>
              <Row>
                <Col sm={6}>
                  <Form.Group controlId="name">
                    <Form.Label className="txt-form">Nombre</Form.Label>
                    <Form.Control
                      name="name"
                      type="text"
                      placeholder="Ingrese Nombre"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="txt-form">Apellido</Form.Label>
                    <Form.Control
                      name="lastName"
                      type="text"
                      placeholder="Ingrese Su Apellido"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="identification">
                    <Form.Label className="txt-form">Identificacion(C.C)</Form.Label>
                    <Form.Control
                      name="identification"
                      type="number"
                      placeholder="Ingrese su identificacion"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="role">
                    <Form.Label className="txt-form">Rol asociado</Form.Label>
                    <Form.Control
                      name="role"
                      type="text"
                      placeholder="Ingrese un rol"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group controlId="state">
                    <Form.Label className="txt-form" >Estado</Form.Label>
                    <Form.Control
                      name="state"
                      type="text"
                      placeholder="Ingrese un estado"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="password">
                    <Form.Label className="txt-form">Contraseña</Form.Label>
                    <Form.Control
                      name="password"
                      type="password"
                      placeholder="Ingrese su contraseña"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="number">
                    <Form.Label className="txt-form">Telefono</Form.Label>
                    <Form.Control
                      name="number"
                      type="number"
                      placeholder="Ingrese su numero de telefono."
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="email">
                    <Form.Label className="txt-form" >Email</Form.Label>
                    <Form.Control
                      name="email"
                      type="mail"
                      placeholder="ingrese su email"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Container>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSaveDb}>
            Aceptar
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default CreateUSer;
