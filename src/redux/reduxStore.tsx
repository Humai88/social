import { combineReducers, createStore } from "redux";
import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";
import { sidebarReducer } from "./sidebarReducer";
import { ActionDialogsTypes } from "./dialogsReducer";
import { ActionProfileTypes } from "./profileReducer";
import { configureStore } from "@reduxjs/toolkit";

export type StoreType = {
  _state: RootStateType;
  getState: () => RootStateType;
  _callSubscriber: (state: RootStateType) => void;
  subscribe: (observer: (state: RootStateType) => void) => void;
  dispatch: (action: ActionProfileTypes & ActionDialogsTypes) => void;
}; // Полная типизация store

// let reducer = combineReducers({
//   profilePage: profileReducer,
//   messagePage: dialogsReducer,
//   sidebarPage: sidebarReducer,
// });

// let store: StoreType = createStore(reducer);
// export type RootStateType = ReturnType<typeof reducer>;

const store = configureStore({
  reducer: {
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    sidebarPage: sidebarReducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

export default store;
