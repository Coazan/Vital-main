import React, { useState } from "react";
import "./NavBar.css";
import vital from "../../assets/vital.jpg";
import { NavLink } from "react-router-dom";

export function NavBar() {
  const [isHidden, setIsHidden] = useState(true); // Initially hidden

  const toggleNavbar = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      {isHidden ? null : (
        <nav className={`navbar navbar-expand-sm bg-dark bg-gradient ${isHidden ? 'hidden' : ''}`}>
          <div className="container-fluid pe-3 ps-3">
            {/* Logo or brand */}
            <div className="ico d-flex">
              <NavLink to="/home" className="nav-link" data-bs-toggle="pill">
                <img id="logo" src={vital} className="rounded-circle" alt="Logo" />
              </NavLink>
            </div>
            {/* Navigation links */}
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
            </ul>
            {/* Toggle button */}
            <button onClick={toggleNavbar} className="navbar-toggler">
              <span className="sr-only">Toggle navigation</span>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </nav>
      )}
      <button className="show-navbar-btn" onClick={toggleNavbar}>
        Mostrar Menú
      </button>
    </>
  );
}
