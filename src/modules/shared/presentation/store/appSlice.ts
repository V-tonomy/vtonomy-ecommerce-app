import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  isInitialized: boolean;
  version: string;
  environment: "development" | "test" | "production";
}

const initialState: AppState = {
  isInitialized: false,
  version: "1.0.0",
  environment: process.env.NODE_ENV || "development",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setInitialized: (state, action: PayloadAction<boolean>) => {
      state.isInitialized = action.payload;
    },
    setVersion: (state, action: PayloadAction<string>) => {
      state.version = action.payload;
    },
  },
});

export const { setInitialized, setVersion } = appSlice.actions;
export default appSlice.reducer;
