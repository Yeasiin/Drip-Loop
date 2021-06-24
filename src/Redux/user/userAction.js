import userActionTypes from "./userTypes";

export const googleSignInStart = () => {
  return { type: userActionTypes.GOOGLE_SIGN_IN_START };
};

export const emailSignInStart = (emailAndPassword) => {
  return {
    type: userActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword,
  };
};

export const signInSuccess = (user) => {
  return { type: userActionTypes.SIGN_IN_SUCCESS, payload: user };
};

export const singInFailure = (error) => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const checkUserSession = () => {
  return { type: userActionTypes.CHECK_USER_SESSION };
};

export const signOutStart = () => ({ type: userActionTypes.SIGN_OUT_START });
export const signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS,
});
export const signOutFailure = (error) => ({
  type: userActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});
