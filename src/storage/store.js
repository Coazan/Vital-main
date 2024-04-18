import { configureStore } from "@reduxjs/toolkit";
import { addSong } from "./slice";

export default configureStore ({
    reducer:{
        mrFavorites: addSong.reducer
    }
})