import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./adminSlice";

const store = configureStore({
    reducer: {
        admin: adminSlice.reducer,
    }
})

export default store;