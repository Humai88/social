import { combineReducers, createStore } from "redux";
import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";
import { Store } from "redux";
import { usersReducer } from "./usersReducer";

// export type StoreType = {
//   _state: RootStateType;
//   getState: () => RootStateType;
//   _callSubscriber: (state: RootStateType) => void;
//   subscribe: (observer: (state: RootStateType) => void) => void;
//   dispatch: (action: ActionProfileTypes & ActionDialogsTypes) => void;
// }; // Полная типизация store

let reducer = combineReducers({
  profilePage: profileReducer,
  messagePage: dialogsReducer,
  usersPage: usersReducer,
});

export type RootStateType = ReturnType<typeof reducer>;

export const store: Store<RootStateType> = createStore(reducer);
