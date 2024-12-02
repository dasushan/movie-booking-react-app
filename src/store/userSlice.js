import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    selectedMovie: null,
    showBookingModal: false
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
        },
        setShowBookingModal: (state,action) => {
            state.showBookingModal = action.payload
        }
    }
})

export const {setMovies, setSelectedMovie, setShowBookingModal} = userSlice.actions;
export default userSlice;