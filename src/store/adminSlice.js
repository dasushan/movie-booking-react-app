import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    selectedMovie: null,
    showCategoryModal: false,
    showTimingModal: false,
}

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload
        },
        setSelectedMovie: (state, action) =>  {
            state.selectedMovie = action.payload
        },
        setShowCategoryModal: (state, action) => {
            state.showCategoryModal = action.payload
        },
        setShowTimingModal: (state, action) => {
            state.showTimingModal = action.payload
        }
    }
})

export const {setMovies, setSelectedMovie, setShowCategoryModal, setShowTimingModal} = adminSlice.actions;

export default adminSlice;