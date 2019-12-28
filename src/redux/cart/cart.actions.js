import cartType from "./cart.types";

export const toggleCartHidden = () => ({
    type: cartType.TOGGLE_CART_HIDEEN
});

export const addItem = item => ({
    type: cartType.ADD_ITEM,
    payload: item
});