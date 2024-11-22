import { configureStore } from "@reduxjs/toolkit";

import DataReducer from "./dataSlice";
import clickedUser from "./clickedUserSlice";

const store = configureStore({
  reducer: {
    data: DataReducer,
    clickedUser: clickedUser,

    // Add other slice reducers here
  },
});

export default store;
