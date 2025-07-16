import { combineReducers, createReducer } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
    empty: createReducer({}, () => {})
})

export type RootState = ReturnType<typeof rootReducer>