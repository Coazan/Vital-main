import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesSongs = ({children}) =>{

    const[song, setSong] = useState("De música ligera");

    return(
        <FavoritesContext.Provider value={{song, setSong}}>
            {children}
        </FavoritesContext.Provider>
    )
}

