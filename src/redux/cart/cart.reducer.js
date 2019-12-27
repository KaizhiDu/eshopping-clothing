import cartType from "./cart.types";

const INIT_STATE = {
    hidden: true
};

const cartReducers = (state = INIT_STATE, action) => {
    switch (action.type) {
        case cartType.TOGGLE_CART_HIDEEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        default:
            return state
    }
};

export default cartReducers;

