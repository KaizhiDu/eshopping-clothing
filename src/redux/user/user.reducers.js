import { userTypes } from './user.types';

const INIT_STATE = {
  currentUser: null,
  error: null
};

const userReducers = (state = INIT_STATE, action) => {
  switch (action.type) {
    //case userTypes.CHECK_USER_SESSION:
    case userTypes.GOOGLE_SIGN_IN_SUCCESS:
    case userTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case userTypes.EMAIL_SIGN_IN_FAILURE:
    case userTypes.GOOGLE_SIGN_IN_FAILURE:
    case userTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case userTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    default:
      return state;
  }
};

export default userReducers;