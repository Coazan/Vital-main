import React, { useState } from "react";
import "./Profile.css";
import vital from "../../../assets/vital.jpg"
import { useSelector, useDispatch } from "react-redux";
import TextArea from "./EditText";
import { removeFavorite } from "../../../storage/slice";

export const Profile = () => {
  const dispatch = useDispatch();
  const favs = useSelector(state => state.mrFavorites.favorites)
  const [isActive, setIsActive] = useState(false);
  const [id, setId] = useState();
  const [name, setName] = useState("Vital")
  const [description, setDescription] = useState("The best way to listen to music.")
  const [about, setAbout] = useState("I was developed for some students at FUSALMO'S frontend course, but I would really like to be a real app.")
  const [favorites, setFavorites] = useState("rock, country")

  const ActivateEdit = (newId) => {
    setIsActive(!isActive);
    setId(newId)
  }

  const removeFromFavorites = (index)=>{
    dispatch(removeFavorite(index))
  }

  const Edit = (Id, value) => {
    switch (Id) {
      case 1:
        setName(value);
        break;
      case 2:
        setDescription(value);
        break;
      case 3:
        setAbout(value);
        break;
      case 4:
        setFavorites(value);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <div className="container-fluid ">

        <div className="row p-4 d-flex ">
          <div className="columna1 col-12 col-lg-6 mb-3" >
            <article className="card bg-dark pt-3 ">
              <div className="card-body p-4">
                <img
                  src={vital}
                  className="rounded-circle img-fluid mx-auto d-block w-25"
                />
                <div className="data-container mt-3 ">
                  <div className="d-flex justify-content-center" 
                  data-bs-toggle="tooltip" data-bs-placement="left" title="Doble click to edit!">
                    <h3 onDoubleClick={() => ActivateEdit(1) }className="data" >{name}</h3>
                  </div>
                  <div className="d-flex justify-content-center mt-1" 
                  data-bs-toggle="tooltip" data-bs-placement="left" title="Doble click to edit!">
                    <h6 onDoubleClick={() => ActivateEdit(2)} className="data">{description}</h6>
                  </div>
                  <div className="d-flex justify-content-center mt-3" 
                  data-bs-toggle="tooltip" data-bs-placement="left" title="Doble click to edit!">
                    <p onDoubleClick={() => ActivateEdit(3)} className="data">{about}</p>
                  </div>
                </div>
                <div className=" d-flex d-flex justify-content-center" id="genre">
                  <p> Favorite Genres: </p>
                  <p className="data border p-2 " onDoubleClick={() => ActivateEdit(4)} 
                  data-bs-toggle="tooltip" title="Doble click to edit!">{favorites}</p>
                </div>
              </div>
              <div className="ps-3 pe-3 pb-1">{isActive ? <TextArea ActivateEdit={ActivateEdit} id={id} Edit={Edit} /> : ""}
            </div>
            </article>
          </div>          
          <div className="columna2 col-12 col-lg-6">
            <div className="border rounded" id="fav-container">
              <h2>Favoritos</h2>
              <hr className="m-0" />
              <ul className="list-group" id="favs">
                {favs.map((favorito, index) => (
                  <li className="d-flex justify-content-between align-items-center m-1 p-1" key={index}>
                    <iframe
                      src={`https://open.spotify.com/embed/track/${favorito.data.id}`}
                      width="300"
                      height="80"
                      frameBorder="0"
                      allowTransparency="true"
                      allow="encrypted-media"
                    ></iframe>
                    <span><button className="btn rounded-circle" onClick={() => removeFromFavorites(index)}><i className="fa-solid fa-xmark "></i></button></span>

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

