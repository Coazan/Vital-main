import React from "react";
import "./Profile.css";
import vital from "../../../assets/vital.jpg"
import { useSelector } from "react-redux";

export const Profile = () => {
  const favs = useSelector(state => state.mrFavorites.favorites)
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-12 col-lg-8 d-flex justify-content-center ">
            <article className="card bg-dark pt-3  mt-3">
              <div className="card-body  p-4">
                <img
                  src={vital}
                  className="rounded-circle img-fluid mx-auto d-block w-25"
                />
                <div className="data mt-3 ">
                  <h3> TUF Gaming</h3>
                  <h6> The strongest gaming components.</h6>
                  <p className="mt-4">
                    Buy me to have the best gaming experience.
                  </p>
                </div>
                <div className=" d-flex w-auto h-auto" id="gender">
                  <button type="button" className="btn">
                    Reggaeton
                  </button>
                  <button type="button" className="btn">
                    Bachata
                  </button>
                  <button type="button" className="btn">
                    Disco
                  </button>
                </div>
              </div>
            </article>
          </div>

          <div className="col-lg-4 ps-2  p-2">
            <div className=" mt-3 border rounded">
              <h2>Favoritos</h2>
              <ul className="list-group">
                {favs.map((favorito, index) => (
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
                    {/*<button className="eliminar" onClick={() => removeFromFavorites(index)}>❌</button>*/}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

