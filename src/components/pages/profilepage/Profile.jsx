import React, { useState } from "react";
import "./Profile.css";
import vital from "../../../assets/vital.jpg"
import { useSelector, useDispatch } from "react-redux";
import TextArea from "./EditText";

export const Profile = () => {
  const favs = useSelector(state => state.mrFavorites.favorites)
  const [isActive, setIsActive] = useState(false);
  const [id, setId] = useState();
  const [name, setName] = useState("Vital")
  const [description, setDescription] = useState("The best way to listening to music.")
  const [about, setAbout] = useState("I was developed for some students at FUSALMO'S frontend course, but I would really like to be a real app.")
  const [favorites, setfavorites] = useState("rock, country")

  const ActivateEdit = (newId) => {
    setIsActive(!isActive);
    setId(newId)
  }

  const handleEdit = (Id, value) => {
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
        setfavorites(value);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <div className="container-fluid ">
        {console.log(isActive)}
        <div className="row p-4 d-flex justify-content-center">
          {isActive ? <TextArea ActivateEdit={ActivateEdit} id={id} handleEdit={handleEdit} /> : ""}
          <div className="columna col-12 col-lg-8 d-flex justify-content-center" >
            <article className="card bg-dark pt-3  mt-3">
              <div className="card-body p-4">
                <img
                  src={vital}
                  className="rounded-circle img-fluid mx-auto d-block w-25"
                />
                <div className="data mt-3 ">
                  <div className="d-flex justify-content-center" 
                  data-bs-toggle="tooltip" data-bs-placement="left" title="Doble click to edit!">
                    <h3 onDoubleClick={() => ActivateEdit(1)} >{name}</h3>
                  </div>
                  <div className="d-flex justify-content-center mt-1" 
                  data-bs-toggle="tooltip" data-bs-placement="left" title="Doble click to edit!">
                    <h6 onDoubleClick={() => ActivateEdit(2)}>{description}</h6>
                  </div>
                  <div className="d-flex justify-content-center mt-3" 
                  data-bs-toggle="tooltip" data-bs-placement="left" title="Doble click to edit!">
                    <p onDoubleClick={() => ActivateEdit(3)}>{about}</p>
                  </div>
                </div>
                <div className=" d-flex " id="genre">
                  <p> Favorits Genres: </p>
                  <p className="border w-100" onDoubleClick={() => ActivateEdit(4)} 
                  data-bs-toggle="tooltip" data-bs-placement="left" title="Doble click to edit!">{favorites}</p>
                </div>
              </div>
            </article>
          </div>

          <div className="columna col-lg-4 ps-2 d-flex p-2 ">
            <div className="mt-3 border rounded w-100">
              <h2>Favoritos</h2>
              <hr className="m-0" />
              <ul className="list-group" id="favs">
                {favs.map((favorito, index) => (
                  <li className="d-flex justify-content-between align-items-center m-1 " key={index}>
                    <iframe
                      src={`https://open.spotify.com/embed/track/${favorito.data.id}`}
                      width="300"
                      height="80"
                      frameBorder="0"
                      allowTransparency="true"
                      allow="encrypted-media"
                    ></iframe>
                    <span><button className="btn " onClick={() => removeFromFavorites(index)}><i className="fa-solid fa-xmark"></i></button></span>
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

