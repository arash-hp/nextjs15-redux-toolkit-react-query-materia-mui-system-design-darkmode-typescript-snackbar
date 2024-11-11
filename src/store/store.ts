import { configureStore } from "@reduxjs/toolkit";
import testSlice from "./slices/testSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      ...testSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
