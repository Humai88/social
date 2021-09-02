import { Dispatch } from "redux";
import { authAPI } from "../api/api";
import { ThunkType } from "./reduxStore";

const initialState: AuthStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};
export type AuthStateType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

export const authReducer = (
  state = initialState,
  action: ActionAuthTypes
): AuthStateType => {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
export type ActionAuthTypes = ReturnType<typeof setAuthUserDataAC>;

// Action creators
export const setAuthUserDataAC = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
) => {
  return {
    type: "SET_USER_DATA",
    payload: {
      userId,
      email,
      login,
      isAuth,
    },
  } as const;
};

// Thunks
export const authThunkCreator = (): ThunkType => {
  return (dispatch) => {
    authAPI.userAuth().then((data) => {
      let { id, email, login } = data.data;
      if (data.resultCode === 0) {
        dispatch(setAuthUserDataAC(id, email, login, true));
      }
    });
  };
};

export const loginThunkCreator = (
  email: string,
  password: string,
  rememberMe: boolean
): ThunkType => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
        dispatch(authThunkCreator());
      }
    });
  };
};

export const logoutThunkCreator = (): ThunkType => {
  return (dispatch) => {
    authAPI.logout().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserDataAC(null, null, null, false));
      }
    });
  };
};
