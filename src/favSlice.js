import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
    name: "fav",
    initialState: {},
    reducers: {
        addFav: (state, action) => {
           
                const {id, text} = action.payload
                state.push({id,text})

        },
            toggleFav(state,action){
                const fav = state.find(fav => fav.id === action.payload)
            }
        }
    });

    export const {addFav, toggleFav} = favSlice.actions

    export default favSlice.reducer