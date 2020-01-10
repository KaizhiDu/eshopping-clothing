import { takeLatest, put, all, call } from 'redux-saga/effects';
import { userTypes } from "./user.types";
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase-utils-config';
import {
  emailSignInFailure,
  emailSignInSuccess,
  googleSignInFailure,
  googleSignInSuccess,
  signOutSuccess,
  signOutFailure
} from "./user.actions";
import { fetchCollectionsStart } from "../shop/shop.sagas";
import { clearCartStart } from "../cart/cart.actions";

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
    console.log(email);
    console.log(password);
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


export function* checkAuthorize() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapShot = yield userRef.get();
    yield put(googleSignInSuccess({
      id: userSnapShot.id,
      ...userSnapShot.data()
    }));
  } catch (err) {
    console.log(err);
  }
}

export function* checkUserSession() {
  yield takeLatest(userTypes.CHECK_USER_SESSION, checkAuthorize);
}

export function* signOutStart() {
  try {
    yield auth.signOut();
    yield (put(signOutSuccess()));
    yield (put(clearCartStart()))
  } catch (error) {
    yield (put(signOutFailure(error)));
  }
}

export function* onSignOutStart() {
  yield takeLatest(userTypes.SIGN_OUT_START, signOutStart);
}


// 集中管理所有user saga
export function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart), call(checkUserSession), call(onSignOutStart)]);
}