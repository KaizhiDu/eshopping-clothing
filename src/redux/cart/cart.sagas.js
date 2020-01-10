import { takeLatest, call, all, put } from 'redux-saga/effects';
import cartType from './cart.types';
import { clearCartSuccess } from './cart.actions';

export function* clearCart() {
  try {
    yield put(clearCartSuccess());
  } catch (err) {
    console.log(err.message);
  }
}

export function* onClearCart() {
  yield takeLatest(cartType.CLEAR_CART_START, clearCart);
}

export function* cartSagas() {
  yield all([call(onClearCart)]);
}