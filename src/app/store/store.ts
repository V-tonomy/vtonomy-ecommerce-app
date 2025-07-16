import { configureStore, createReducer } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { container } from "../di/container";
import { ILogger } from "@/modules/shared/infrastructure/logging/ILogger";
import { createLoggingMiddleware } from "./middleware/loggingMiddleware";

const logger = container.resolve<ILogger>('ILogger')

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware({
            thunk: { 
                extraArgument: {
                    container,
                    logger,
                }
             },
            serializableCheck: {ignoredActions: ['persist/PERSIST']},
        }).concat(createLoggingMiddleware(logger)),
    devTools: process.env.NODE_ENV !== 'production',
})
