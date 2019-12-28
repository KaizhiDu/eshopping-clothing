import cartType from "./cart.types";
import { addItemToCart } from './cart.utils';

const INIT_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducers = (state = INIT_STATE, action) => {
    switch (action.type) {
        case cartType.TOGGLE_CART_HIDEEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case cartType.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        default:
            return state;
    }
};

export default cartReducers;

