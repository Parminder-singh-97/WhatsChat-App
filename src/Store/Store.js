import { configureStore } from "@reduxjs/toolkit";

import DataReducer from './dataSlice'

const store = configureStore({

    reducer: {

        data: DataReducer,

        // Add other slice reducers here


    }



})

export default store;