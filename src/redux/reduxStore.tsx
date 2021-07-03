import { combineReducers, createStore } from "redux";
import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";
import { sidebarReducer, SidebarType } from "./sidebarReducer";
import { ActionDialogsTypes } from "./dialogsReducer";
import { ActionProfileTypes } from "./profileReducer";

export type PostType = {
  id: string;
  post: string;
  likes: number;
};

export type PostsDataType = Array<PostType>;

export type DialogType = {
  id: string;
  name: string;
  image: string;
};
export type DialogsDataType = Array<DialogType>;

export type MessageType = {
  id: string;
  text: string;
};

export type MessageDataType = Array<MessageType>;

export type profilePageType = {
  posts: PostsDataType;
  newPostText: string;
};

export type messagePageType = {
  dialogs: DialogsDataType;
  messages: MessageDataType;
  newMessageText: string;
};

export type RootStateType = {
  profilePage: profilePageType;
  messagePage: messagePageType;
  sidebarPage: SidebarType;
}; // Типизация объекта с данными

export type StoreType = {
  _state: RootStateType;
  getState: () => RootStateType;
  _callSubscriber: (state: RootStateType) => void;
  subscribe: (observer: (state: RootStateType) => void) => void;
  dispatch: (action: ActionProfileTypes | ActionDialogsTypes | any) => void;
}; // Полная типизация store

let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: dialogsReducer,
  sidebarPage: sidebarReducer,
});
let store: StoreType = createStore(reducers);

export default store;
