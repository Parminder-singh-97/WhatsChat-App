import { createSlice } from "@reduxjs/toolkit";

const STATUS = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
  SUCCESS: "success",
});

const DataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    status: STATUS.IDLE,
  },
  reducers: {
    addData(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { addData, setStatus } = DataSlice.actions;
export default DataSlice.reducer;

//thunks

export function fetchUserData() {
  return async function fetchDataThunk(dispatch, getState) {
    dispatch(setStatus(STATUS.LOADING));

    try {
      const res = await fetch("https://randomuser.me/api/?results=15");
      const data = await res.json();
      dispatch(addData(data));
      dispatch(setStatus(STATUS.SUCCESS));
    } catch (err) {
      dispatch(setStatus(STATUS.ERROR));
      console.error(err);
    }
  };
}
