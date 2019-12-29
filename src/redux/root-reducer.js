import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import userReducers from "./user/user.reducers";
import cartReducers from "./cart/cart.reducers";
import directoryReducer from "./directory/directory.reducers";


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducers,
    cart: cartReducers,
    directory: directoryReducer
});

export default persistReducer(persistConfig, rootReducer);