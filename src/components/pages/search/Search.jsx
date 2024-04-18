import React, { useState } from "react";
import "./search.css";
import { useDispatch } from "react-redux";
import { addFavorite } from "../../../storage/slice";

export function Search() {
  const [cancion, setCancion] = useState("");
  const [canciones, setCanciones] = useState([]);
  const [favoritos, setFavoritos] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

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
      setError(
        "Ups... Ha ocurrido un error. Por favor, intenta de nuevo más tarde."
      );
    }
    setLoading(false);
  }

  async function getSong(cancion) {
    let url = `${import.meta.env.VITE_URI_SPOTIFY}/search/?q=${encodeURIComponent(
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
      throw error;
    }
  }

  function addToFavorites(cancion) {
    dispatch(addFavorite(cancion));
    setFavoritos(!favoritos);
  }

  function removeFromFavorites(index) {
    const newFavoritos = [...favoritos];
    newFavoritos.splice(index, 1);
    setFavoritos(newFavoritos);
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
          {loading ? "Buscando..." : <i class="fa-solid fa-magnifying-glass"></i>}
        </button>
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
              <i class="fa-sharp fa-regular fa-star"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}