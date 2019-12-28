export const addItemToCart = (cartItems, addItem) => {
    const existItem = cartItems.find(cartItem => cartItem.id === addItem.id);
    if (existItem) {
        return cartItems.map(cartItem => {
            if (cartItem.id === addItem.id) {
                return {
                    ...cartItem,
                    quantity: cartItem.quantity + 1
                };
            } else {
                return cartItem
            }
        });
    }
    return [...cartItems, {...addItem, quantity: 1}];
};