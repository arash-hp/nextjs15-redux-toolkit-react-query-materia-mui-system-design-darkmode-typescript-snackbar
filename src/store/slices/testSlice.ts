import { combineSlices, createSlice } from "@reduxjs/toolkit";
export const rootReducer = combineSlices().withLazyLoadedSlices();

const initialState: unknown[] = [];

const testSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    testTodo(state) {
      return state;
    },
  },
});
export const { actions } = testSlice;
export const { testTodo } = actions;
const reducer = {
  todo: testSlice.reducer,
};
export default reducer;
