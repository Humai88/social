import { authThunkCreator } from "./authReducer";
import { ThunkType } from "./reduxStore";

const initialState: AppStateType = {
  initialized: false,
};

export const appReducer = (
  state = initialState,
  action: ActionAppTypes
): AppStateType => {
  switch (action.type) {
    case "SET_INITIALIZATION":
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

// Action creators
export const setInitializationAC = () => {
  return {
    type: "SET_INITIALIZATION",
  } as const;
};

// Thunks

export const initializationThunkCreator = (): ThunkType => {
  return (dispatch) => {
    dispatch(authThunkCreator());
    dispatch(setInitializationAC());
  };
};

// Types
export type AppStateType = {
  initialized: boolean;
};
export type ActionAppTypes = ReturnType<typeof setInitializationAC>;
