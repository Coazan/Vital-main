import { createSlice } from "@reduxjs/toolkit";

export const addSong = createSlice({
    name:"mrFavorites",
    initialState:{
        favorites:[]
    },
    reducers:{
        addFavorite: (state, action)=>{
            state.favorites=[...state.favorites, action.payload]
        }
    }
})

export const {addFavorite} = addSong.actions;