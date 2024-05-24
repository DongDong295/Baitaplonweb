import { createSelector } from "@reduxjs/toolkit";

export const cartItemSelector = (state) => state.cart.cartItem;

export const cartItemCountSelector = createSelector(cartItemSelector, (cartItem) => 
    cartItem.reduce((count, item) => count + item.quantity, 0));

export const cartTotalSelector = createSelector(cartItemSelector, (cartItem) => 
    cartItem.reduce((total, item) => total + item.list_price * item.quantity, 0));

