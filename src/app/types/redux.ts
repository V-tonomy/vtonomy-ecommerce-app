import { store } from '../store/store'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export interface BaseAction {
    type: string,
    payload?: unknown,
    meta?: unknown,
    error?: unknown
}