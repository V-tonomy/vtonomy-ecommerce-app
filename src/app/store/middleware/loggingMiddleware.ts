import { ILogger } from "@/modules/shared/infrastructure/logging/ILogger";
import { Middleware } from "@reduxjs/toolkit";


export const createLoggingMiddleware = (logger: ILogger): Middleware => {
    return (store) => (next) => (action) => {

        const typedAction = action as { type: string, payload?: unknown}

        if (shouldSkipLogging(typedAction.type)) {
            return next(action)
        }

        const startTime = performance.now()

        logger.debug('Action dispatched', {
            action: typedAction.type,
            payload: sanitizePayload(typedAction.payload),
            timestamp: new Date().toISOString(),
        })

        const result = next(action)

        const duration = performance.now() - startTime
        const state = store.getState()

        logger.info('Action completed', {
            action: typedAction.type,
            duration: duration,
            userId: state.auth?.user?.id,
            sessionId: state.auth?.sessionId,
        })

        if (duration > 100) {
            logger.warn('Slow action detected', {
                action: typedAction.type,
                duration: duration
            })
        }

        return result
    }
}

const shouldSkipLogging = (actionType: string): boolean => {
    const excludedActions = [
        "auth/setTokens",
        "ui/setMousePosition",
        "app/heartbeat"
    ]
    return excludedActions.includes(actionType)
}

const sanitizePayload = (payload: unknown): unknown => {
    return payload
}