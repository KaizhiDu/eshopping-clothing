import { userTypes } from './user.types';

const INIT_STATE = {
  currentUser: null,
  error: null
};

const userReducers = (state = INIT_STATE, action) => {
  switch (action.type) {
    case userTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    case userTypes.GOOGLE_SIGN_IN_SUCCESS:
    case userTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case userTypes.EMAIL_SIGN_IN_FAILURE:
    case userTypes.GOOGLE_SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducers;