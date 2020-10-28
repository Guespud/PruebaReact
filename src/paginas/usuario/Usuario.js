import React from "react";
import CreateUSer from "../createUser/CreateUser";
import ListUser from "../listUser/ListUser";
import NavbarMenu from "../navbar/Navbar";
import UserFiltro from "../filtro/UserFiltro";
import { Row, Col, Container } from "react-bootstrap";
import "./Usuario.css";



const Usuario = () => {
  return (
    <div className="container-config-user">
      <NavbarMenu />
      <Container>
        <Row>
          <Col sm={8}>
            <div className="card-usuario">
              <div className="create-user">
                <CreateUSer />
              </div>
              <div className="list-user">
                <ListUser />
              </div>
            </div>
          </Col>
          <Col sm={4}>
              <div>
                  <UserFiltro/>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Usuario;
