import { authAPI } from "../api/api";
import { ThunkType } from "./reduxStore";

const initialState: AuthStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
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

// Action creators
export const setAuthUserDataAC = (
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
) => {
  return {
    type: "SET_USER_DATA",
    payload: {
      id,
      email,
      login,
      isAuth,
    },
  } as const;
};

// Thunks
export const authThunkCreator = (): ThunkType => {
  return (dispatch) => {
    return authAPI.userAuth().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthUserDataAC(id, email, login, true));
      }
    });
  };
};

export const loginThunkCreator = (
  email: string,
  password: string,
  rememberMe: boolean,
  setStatus: (status: string[]) => void
): ThunkType => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
        dispatch(authThunkCreator());
      } else {
        setStatus(data.messages);
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

// Types
export type AuthStateType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};
export type ActionAuthTypes = ReturnType<typeof setAuthUserDataAC>;
