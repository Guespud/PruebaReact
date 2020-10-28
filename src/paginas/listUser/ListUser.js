import { data } from "jquery";
import React, { useState, useEffect } from "react";
import { Table, Container, Button } from "react-bootstrap";
import * as AiIcons from "react-icons/ai";
import fire from "../../utils/firebase-config";
import CreateUser from "../createUser/CreateUser";
import "./ListUser.css";

const ListUser = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    var ref = fire.database().ref("/usuarios");
    var dataArray = [];
    ref.once("value", function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        var key = childSnapshot.key;
        var data = childSnapshot.val();

        dataArray.push({
          key: key,
          name: data.name,
          lastName: data.lastName,
          identification: data.identification,
          password: data.password,
          role: data.role,
          state: data.state,
          email: data.email,
          number: data.number,
        });
      });
      setUserList(dataArray);
    });

  }, []);

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
          {userList.map((data) => {
            return (
              <tr className="tr-body-table">
                <td className="txt-cuerpo-table">{data.name}</td>
                <td className="txt-cuerpo-table">{data.lastName}</td>
                <td className="txt-cuerpo-table">{data.identification}</td>
                <td className="txt-cuerpo-table">{data.role}</td>
                <td className="txt-cuerpo-table">{data.state}</td>
                <td className="txt-cuerpo-table">{data.number}</td>
                <td className="txt-cuerpo-table">{data.email}</td>
                <td className="txt-accion-table">
                  <a>
                    <AiIcons.AiTwotoneDelete />
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};
export default ListUser;
