import React, { useState } from "react";
import "./search.css";

export function Search() {
  const [cancion, setCancion] = useState("");
  const [canciones, setCanciones] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSearch(e) {
    e.preventDefault();
    if (cancion.trim() === "") {
      setError("Por favor, ingresa el nombre de una canción.");
      return;
    }
    setLoading(true);
    try {
      await getSong(cancion);
    } catch (error) {
      console.error(`Error: ${error}`);
      setError(
        "Ups... Ha ocurrido un error. Por favor, intenta de nuevo más tarde."
      );
    }
    setLoading(false);
  }
  import.meta.env.VITE_URI_SPOTIFY
  async function getSong(cancion) {
    //console.log(import.meta.env.VITE_URI_SPOTIFY  )
    let url =  import.meta.env.VITE_URI_SPOTIFY + `/search/?q=${encodeURIComponent(
      cancion
    )}&type=multi&offset=0&limit=30&numberOfTopResults=5`;
    try {
      let response = await fetch(url, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_API_KEY_SPOTIFY,
          "X-RapidAPI-Host": import.meta.env.VITE_HOST_SPOTIFY
        }
      });
      if (!response.ok) {
        throw new Error("Error al obtener los datos de la canción");
      }
      let data = await response.json();
      setCanciones(data.tracks.items);
    } catch (error) {
      console.error("Error:", error.message);
      setError(
        "Ups... Ha ocurrido un error. Por favor, intenta de nuevo más tarde."
      );
    }
  }

  function addToFavorites(cancion) {
    setFavoritos([...favoritos, cancion]);
  }

  function removeFromFavorites(index) {
    const newFavoritos = [...favoritos];
    newFavoritos.splice(index, 1);
    setFavoritos(newFavoritos);
  }

  // Función para manejar la búsqueda por voz
  function handleVoiceSearch() {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "es-ES";
    recognition.start();
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setCancion(transcript);
    };
  }

  return (
    <div className="container">
      <h2>Busca tu música Favorita🌟</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={cancion}
          onChange={(e) => setCancion(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Buscando..." : "Buscar🕵🏼"}
        </button>
        <button className="voice-search" onClick={handleVoiceSearch}>🎤</button>
      </form>
      {error && <div className="error">{error}</div>}
      <div className="track-container">
        {canciones.map((cancion, index) => (
          <div className="track" key={index}>
            {cancion.data.albumOfTrack.coverArt.sources[0] && (
              <img src={cancion.data.albumOfTrack.coverArt.sources[0].url} alt="" />
            )}
            <div className="track-info">
              <h2>{cancion.data.name}</h2>
              <iframe
                src={`https://open.spotify.com/embed/track/${cancion.data.id}`}
                width="300"
                height="80"
                frameBorder="0"
                allowTransparency="true"
                allow="encrypted-media"
              ></iframe>
              <button onClick={() => addToFavorites(cancion)}>
                {favoritos.includes(cancion) ? "✅" : "❤️"}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="favoritos">
        <h2>Favoritos</h2>
        <ul>
          {favoritos.map((favorito, index) => (
            <li key={index}>
              <h3>{favorito.data.name}</h3>
              {favorito.data.albumOfTrack.coverArt.sources[0] && (
                <img src={favorito.data.albumOfTrack.coverArt.sources[0].url} alt="" />
              )}
              <iframe
                src={`https://open.spotify.com/embed/track/${favorito.data.id}`}
                width="300"
                height="80"
                frameBorder="0"
                allowTransparency="true"
                allow="encrypted-media"
              ></iframe>
              <button className="eliminar" onClick={() => removeFromFavorites(index)}>❌</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

  
 
 
 
