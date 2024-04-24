import React from "react";
import "./NavBar.css";
import vital from "../../assets/vital.jpg"


import { NavLink } from "react-router-dom";

export function NavBar() {

  return (
    <>
      <nav className="navbar m-0 navbar-expand-sm bg-dark bg-gradient">
        <div className="container-fluid pe-3 ps-3">
          <div className="ico d-flex ">
          <NavLink to="/home"
          className={"nav-link"} 
          data-bs-toggle={"pill"}>
            <img
              id="logo"
              src={vital}
              className="rounded-circle"
            />
            </NavLink>
          </div>
          <ul className="nav nav-pills">
              <li className="nav-item">
                <NavLink to="/home" className="nav-link" data-bs-toggle="pill">
                  <i className="fa-solid fa-house"></i> Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/profile" className="nav-link" data-bs-toggle="pill">
                  <i className="fa-solid fa-user"></i> Perfil
                </NavLink>
                
              </li>
              <li className="nav-item">
                <NavLink to="/search" className="nav-link" data-bs-toggle="pill">
                  <i className="fa-solid fa-magnifying-glass"></i> Buscar
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/" className="exit nav-link" data-bs-toggle="pill">
                <i className="fa-solid fa-right-from-bracket"></i> Salir
                </NavLink>
              </li>
            </ul> 
        </div>
      </nav>
    </>
  );
}
