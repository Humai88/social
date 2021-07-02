// import { v1 } from "uuid";
import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";
import { ActionProfileTypes } from "./profileReducer";
import { ActionDialogsTypes } from "./dialogsReducer";

export type PostType = {
  id: number;
  post: string;
  likes: number;
};

export type PostsDataType = Array<PostType>;

export type DialogType = {
  id: number;
  name: string;
  image: string;
};
export type DialogsDataType = Array<DialogType>;

export type MessageType = {
  id: number;
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
  prifilePage: profilePageType;
  messagePage: messagePageType;
};

export type StoreType = {
  _state: RootStateType;
  getState: () => RootStateType;
  _callSubscriber: (state: RootStateType) => void;
  subscribe: (observer: (state: RootStateType) => void) => void;
  dispatch: (action: ActionProfileTypes | ActionDialogsTypes) => void;
};

let store: StoreType = {
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action: ActionDialogsTypes | ActionProfileTypes) {
    this._state.prifilePage = profileReducer(
      this._state.prifilePage,
      action as ActionProfileTypes
    );
    this._state.messagePage = dialogsReducer(
      this._state.messagePage,
      action as ActionDialogsTypes
    );
    this._callSubscriber(this._state);
  },
  _state: {
    prifilePage: {
      posts: [
        { id: new Date().getTime(), post: "Hi, Gumay", likes: 7 },
        { id: new Date().getTime(), post: "How are you?", likes: 9 },
        { id: new Date().getTime(), post: "Fine, thanks", likes: 15 },
      ],
      newPostText: "",
    },
    messagePage: {
      dialogs: [
        {
          id: 1,
          name: "Ann",
          image:
            "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 2,
          name: "Alex",
          image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 3,
          name: "Nick",
          image:
            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 4,
          name: "Max",
          image:
            "https://images.unsplash.com/photo-1623930154261-37f8b293c059?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 5,
          name: "Kate",
          image:
            "https://images.unsplash.com/photo-1587568787539-3f70370dd715?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
      ],
      messages: [
        { id: 1, text: "Hi" },
        { id: 2, text: "How are you?" },
        { id: 3, text: "Fine, thanks" },
      ],
      newMessageText: "",
    },
  },
  _callSubscriber() {
    console.log("changed");
  },
};

export default store;
