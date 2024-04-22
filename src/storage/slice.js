import { createSlice } from "@reduxjs/toolkit";

export const addSong = createSlice({
    name:"mrFavorites",
    initialState:{
        favorites:[]
    },
    reducers:{
        addFavorite: (state, action)=>{
            state.favorites=[...state.favorites, action.payload]
        },
        removeFavorite: (state, action) =>{
            state.favorites.splice(action.payload, 1)
        }
    }
})

export const {addFavorite} = addSong.actions;
export const {removeFavorite} = addSong.actions;