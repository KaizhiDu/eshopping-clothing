import { takeLatest, put, all, call } from 'redux-saga/effects';
import { userTypes } from "./user.types";
import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase-utils-config';
import { emailSignInFailure, emailSignInSuccess, googleSignInFailure, googleSignInSuccess } from "./user.actions";
import { fetchCollectionsStart } from "../shop/shop.sagas";

export function* signInWithGoogle() {
  try {
    const {user} = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapShot = yield userRef.get();
    yield put(googleSignInSuccess({
      id: userSnapShot.id,
      ...userSnapShot.data()
    }));
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmail({payload: {email, password}}) {
  try {
    const {user} = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapShot = yield userRef.get();
    yield put(emailSignInSuccess({
      id: userSnapShot.id,
      ...userSnapShot.data()
    }));
  } catch (error) {
    yield put(emailSignInFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

// 集中管理所有user saga
export function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}