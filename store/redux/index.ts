import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {
    persistStore, persistReducer,
    FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {CartReducer} from "./slices/cartSlice";

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    cart: CartReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const setupStore = () => {
    return configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
    })
}

export const store = setupStore()

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export const persist = persistStore(store)