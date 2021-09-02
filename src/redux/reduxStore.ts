import { applyMiddleware, combineReducers, createStore } from "redux";
import { ActionProfileTypes, profileReducer } from "./profileReducer";
import { ActionDialogsTypes, dialogsReducer } from "./dialogsReducer";
import { ActionUsersTypes, usersReducer } from "./usersReducer";
import { ActionAuthTypes, authReducer } from "./authReducer";
import thunkMiddleware, { ThunkAction } from "redux-thunk";

let reducer = combineReducers({
  profilePage: profileReducer,
  messagePage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

export const store = createStore(reducer, applyMiddleware(thunkMiddleware));

// Types
export type AppActionsType =
  | ActionAuthTypes
  | ActionDialogsTypes
  | ActionProfileTypes
  | ActionUsersTypes;

export type RootStateType = ReturnType<typeof reducer>;

export type ThunkType = ThunkAction<
  void,
  RootStateType,
  unknown,
  AppActionsType
>;
