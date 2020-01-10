import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';

import ShopActionTypes from './shop.types';
import { convertSnapshotToMap, firestore } from "../../firebase/firebase-utils-config";
import { shopFetchCollectionsSuccess } from "./shop.actions";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    // same like async await
    const snapshot = yield collectionRef.get();
    // call first param is a function, second param is the parameter pass in function
    const collectionMap = yield call(convertSnapshotToMap, snapshot);
    yield put(shopFetchCollectionsSuccess(collectionMap));
  } catch (err) {
    console.log(err.message);
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(ShopActionTypes.SHOP_FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}