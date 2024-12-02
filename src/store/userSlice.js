import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    selectedMovie: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setMovies: (state, action) => {
            state.movies = action.payload
        },
        setSelectedMovie: (state, action) => {
            state.selectedMovie = action.payload
        }
    }
})

export const {setMovies, setSelectedMovies} = userSlice.actions;
export default userSlice;