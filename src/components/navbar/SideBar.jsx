import React from "react";
import "./NavBar.css";


const SideBar = ({ open, close }) => {

  return (
    <>
      <aside className={`sidebar ${open ? "open" : ""} bg-dark`}>
        <button className="btn rounded" onClick={close}>
          X
        </button>
        <div className="m-3">
        </div>
      </aside>
    </>
  );
};

export default SideBar;
