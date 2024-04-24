import React, { useState } from "react";
import "./search.css";
import { useDispatch } from "react-redux";
import { addFavorite } from "../../../storage/slice";

export function Search() {
  const [cancion, setCancion] = useState("");
  const [canciones, setCanciones] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
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
    setFavoritos([...favoritos, cancion]);
  }

  function removeFromFavorites(index) {
    const newFavoritos = [...favoritos];
    newFavoritos.splice(index, 1);
    setFavoritos(newFavoritos);
  }

  return (
    <div className="container">
      <h2>Busca tu música Favorita🌟</h2>
      <form className="yate" onSubmit={handleSearch}>
        <input
          type="avion"
          value={cancion}
          onChange={(e) => setCancion(e.target.value)}
          placeholder="Busca una canción o artista"
        />
        <button className="carro" type="submit" disabled={loading}>
          {loading ? "Buscando..." : <i className="fas fa-search"></i>}
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
                width="100%"
                height="80"
                frameBorder="0"
                allowTransparency="true"
                allow="encrypted-media"
              ></iframe>
              <button className="maracas" onClick={() => addToFavorites(cancion)}>
                {favoritos.includes(cancion) ? (
                  <i className="fas fa-heart"></i>
                ) : (
                  <i className="far fa-heart"></i>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}