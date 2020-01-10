import { userTypes } from './user.types';

export const signOutStart = () => ({
    type: userTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
    type: userTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = (error) => ({
    type: userTypes.SIGN_OUT_SUCCESS,
    payload: error
});

export const checkUserSession = () => ({
    type: userTypes.CHECK_USER_SESSION,
});

export const googleSignInStart = () => ({
    type: userTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = (emailAndPassword) => ({
    type: userTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

export const googleSignInSuccess = (user) => ({
    type: userTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload: user
});

export const emailSignInSuccess = (user) => ({
    type: userTypes.EMAIL_SIGN_IN_START,
    payload: user
});

export const googleSignInFailure = (error) => ({
    type: userTypes.GOOGLE_SIGN_IN_FAILURE,
    payload: error
});

export const emailSignInFailure = (error) => ({
    type: userTypes.EMAIL_SIGN_IN_FAILURE,
    payload: error
});
