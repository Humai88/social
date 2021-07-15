import { combineReducers, createStore } from "redux";
import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";
import { Store } from "redux";
import { usersReducer } from "./usersReducer";

let reducer = combineReducers({
  profilePage: profileReducer,
  messagePage: dialogsReducer,
  usersPage: usersReducer,
});

export type RootStateType = ReturnType<typeof reducer>;

export const store: Store<RootStateType> = createStore(reducer);
