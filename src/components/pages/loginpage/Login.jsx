import React, { useState } from 'react'; // Importa useState desde React
import './Login.css'; // Importa el archivo CSS
import vital from "../../../assets/vital.jpg";

export function Login() {
  // State variables for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    // Add your logic for form submission here (e.g., sending data to server)
  };

  return (
    <>
      <img src={vital} className="login-logo" /> {/* Move the image outside the main container */}
      <div className="login-container">
        <h2>Iniciar sesión</h2>
        <form className='nayik' onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Nombre de usuario</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="remember-me">
              <input type="checkbox" id="remember-me" /> Recuérdame
            </label>
          </div>
          <button onClick={() => (window.location.href = "/home")} type="dos">
            Iniciar sesión
          </button>
          <a href="#">¿Olvidaste tu contraseña?</a>
        </form>
      </div>
    </>
  );
}
