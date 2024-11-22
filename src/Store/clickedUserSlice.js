import { createSlice } from "@reduxjs/toolkit";

const clickedUserSlice = createSlice({
  name: "clickedUser",
  initialState: {
    userData: {},
    userClicked: false,
  },

  reducers: {
    showUser: (state, action) => {
      state.userData = action.payload;
    },

    userClicked: (state, action) => {
      state.userClicked = action.payload;
    },
  },
});

export const { showUser, userClicked } = clickedUserSlice.actions;
export default clickedUserSlice.reducer;
