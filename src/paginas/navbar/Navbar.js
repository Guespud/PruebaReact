import React, { useState } from "react";
import * as FcIcons from "react-icons/fc";
import { Link } from "react-router-dom";
import { SidebarData } from "./sidebar";
import "./Navbar.css";
import { IconContext } from "react-icons";

const NavbarMenu = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FcIcons.FcList onClick={showSidebar} />
          </Link>
          <h2 className="prueba-txt">Prueba Front-end </h2>
          <h2 className="prueba-txt-usuario">
            <FcIcons.FcBusinessman />
            Alejandro Guespud diaz
          </h2>
          <Link to={`/`}>
            <button className="btn btn-link btn-logout">
              <FcIcons.FcImport />
            </button>
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <FcIcons.FcList />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default NavbarMenu;
