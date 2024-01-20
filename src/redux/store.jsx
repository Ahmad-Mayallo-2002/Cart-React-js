import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import logger from 'redux-logger'

const store = configureStore({
    reducer: {
        cart: cartSlice,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;