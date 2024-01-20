import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    list: [],
    total: 0,
};

const cartSlice = createSlice({
    name: "Cart Slice",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const check = state.list.findIndex(book => book.id === action.payload.id);
            if (check !== -1) {
                state.list[check].quantity += action.payload.quantity;
                toast.info(` ${action.payload.name} in Cart`, {
                    position: "bottom-left",
                });
            } else {
                state.list = [...state.list, action.payload];
                toast.success(`Add ${action.payload.name} To Cart`, {
                    position: "bottom-left",
                });
            }
        },
        updateQuantity: (state, action) => {
            const check = state.list.findIndex(book => book.id === action.payload.id);
            if (check !== -1) {
                state.list[check].quantity = action.payload.quantity;
            }
            state.total = state.list.reduce((sum, book) => sum + +book?.price * +book?.quantity, 0)
        },
        removeItem: (state, action) => {
            state.list = state.list.filter(book => book.id !== action.payload.id);
            state.total = state.list.reduce((sum, book) => sum + +book?.price * book?.quantity, 0)
        }
    },
});

export const { addToCart, updateQuantity, removeItem } = cartSlice.actions;

export default cartSlice.reducer;