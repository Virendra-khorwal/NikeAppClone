
import { createSelector, createSlice } from "@reduxjs/toolkit";
import cart from "../data/cart";

const initialState = {
    item: cart,
    deliveryFee: 15,
    freeDeliveryFrom: 200,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCartItem: (state, action) => {
            const newProduct = action.payload.product;

            const existingProduct = state.item.find((item) => item.product.id === newProduct.id);

            if (existingProduct) {
                existingProduct.quantity++;
                return;
            }

            state.item.push({product: newProduct, quantity: 1});

        },
        changeQuantity: (state, action) => {
            const { productId, amount } = action.payload;
            const existingProduct = state.item.find((item) => item.product.id === productId);

            if (existingProduct) {
                existingProduct.quantity += amount;
            }

            if (existingProduct?.quantity <= 0) {
              state.item = state.item.filter(
                (item) => item.product.id !== productId
              );
            }
        },
        
    }
})

export const { addToCartItem, changeQuantity } = cartSlice.actions;

export const selectNumberOfItems = (state) => state.cart.item.length;
export const selectSubCartTotal = (state) => state.cart.item.reduce((total, item) => total + item.product.price * item.quantity, 0);

const cartSelector = (state) => state.cart;

export const selectDeliveryFee = createSelector(
    cartSelector,
    selectSubCartTotal,
    (cart, subTotal) => ( subTotal > cart.freeDeliveryFrom ? 0 : cart.deliveryFee)
);

export const selectTotal = createSelector(
    selectSubCartTotal,
    selectDeliveryFee,
    (subTotal, deliveryFee) => subTotal + deliveryFee
)