import React, { useState } from "react";
import "./home.css";
import { Login } from "./Login.jsx";

export const Home = () => {
    const [showLogin, setShowLogin] = useState(false);

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    return (
        <div className="home-container">
            <div className="home-content">
                <h1 className="home-title">Bienvenido a Mi Aplicación Musical</h1>
                <p className="home-description">Explora y encuentra tus canciones favoritas</p>
                {showLogin ? (
                    <Login />
                ) : (
                    <button className="home-login-button" onClick={handleLoginClick}>Iniciar Sesión</button>
                )}
            </div>
            <div className="home-features">
                <h2>Características Principales</h2>
                <ul>
                    <li>Explora una vasta biblioteca de canciones.</li>
                    <li>Crea listas de reproducción personalizadas.</li>
                    <li>Sigue a tus artistas favoritos.</li>
                </ul>
            </div>
            <div className="home-links">
                <a href="/buscar" className="home-link">Buscar</a>
                <a href="/categorias" className="home-link">Categorías</a>
            </div>
            <div className="home-testimonials">
                <h2>Lo que dicen nuestros usuarios</h2>
                <p>"¡Esta aplicación musical es increíble! ¡Encuentro nuevas canciones geniales todos los días!" - Usuario Anónimo</p>
            </div>
        </div>
    );
};
