import { Dispatch } from "redux";
import { authAPI } from "../api/api";

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
  action: AuthProfileTypes
): AuthStateType => {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      };

    default:
      return state;
  }
};
export type AuthProfileTypes = ReturnType<typeof setAuthUserDataAC>;
export const setAuthUserDataAC = (
  userId: number,
  email: string,
  login: string
) => {
  return {
    type: "SET_USER_DATA",
    payload: {
      userId,
      email,
      login,
    },
  } as const;
};

export const authThunkCreator = () => {
  return (dispatch: Dispatch<AuthProfileTypes>) => {
    authAPI.userAuth().then((data) => {
      let { id, email, login } = data.data;
      if (data.resultCode === 0) {
        dispatch(setAuthUserDataAC(id, email, login));
      }
    });
  };
};
