import React from "react";
import { Table, Container, Button } from "react-bootstrap";
import * as AiIcons from "react-icons/ai";
import "./ListUser.css";

const ListUser = () => {
  return (
    <Container>
      <Table responsive className="table-table">
        <thead>
          <tr className="tr-table">
            <th className="txt-cabecera-table">Nombres</th>
            <th className="txt-cabecera-table">Apellidos</th>
            <th className="txt-cabecera-table">Identificación</th>
            <th className="txt-cabecera-table">Rol</th>
            <th className="txt-cabecera-table">Estado</th>
            <th className="txt-cabecera-table">Télefono</th>
            <th className="txt-cabecera-table">Email</th>
            <th className="txt-cabecera-table">Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr className="tr-body-table">
            <td className="txt-cuerpo-table">Alejandro</td>
            <td className="txt-cuerpo-table">Guespud</td>
            <td className="txt-cuerpo-table">1113678727</td>
            <td className="txt-cuerpo-table">Admin</td>
            <td className="txt-cuerpo-table">Activo</td>
            <td className="txt-cuerpo-table">765432213</td>
            <td className="txt-cuerpo-table">alejo.habbacuc@gmail.com</td>
            <td className="txt-accion-table">
              <a><AiIcons.AiTwotoneDelete /></a>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};
export default ListUser;
