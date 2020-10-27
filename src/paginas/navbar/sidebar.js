import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "OLSoftware",
    path: "/",
    icon: <FaIcons.FaCircle />,
    cName: "nav-text",
  },
  {
    title: "Programacion",
    path: "/",
    icon: <FaIcons.FaNewspaper />,
    cName: "nav-text",
  },
  {
    title: "Gestion de operaciones",
    path: "/reports",
    icon: <AiIcons.AiOutlineBars />,
    cName: "nav-text",
  },
  {
    title: "perfiles",
    path: "/products",
    icon: <BsIcons.BsFillPersonLinesFill />,
    cName: "nav-text",
  },
  {
    title: "Roles",
    path: "/products",
    icon: <FaIcons.FaYandex />,
    cName: "nav-text",
  },
  {
    title: "usuario",
    path: "/team",
    icon: <BsIcons.BsFillPersonFill />,
    cName: "nav-text",
  },
  {
    title: "Reportes",
    path: "/messages",
    icon: <RiIcons.RiFilePaper2Line />,
    cName: "nav-text",
  },
];
