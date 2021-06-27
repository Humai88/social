// import { v1 } from "uuid";

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
  dispatch: (action: ActionTypes) => void;
};

export type ActionTypes =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof updateNewPostTextAC>
  | ReturnType<typeof updateNewMessageTextAC>
  | ReturnType<typeof addMessageAC>;

export const addPostAC = () => {
  return {
    type: "ADD-POST",
  } as const;
};
export const updateNewPostTextAC = (text: string) => {
  return { type: "UPDATE-NEW-POST-TEXT", newText: text } as const;
};

export const addMessageAC = () => {
  return {
    type: "ADD-MESSAGE",
  } as const;
};

export const updateNewMessageTextAC = (text: string) => {
  return { type: "UPDATE-NEW-MESSAGE-TEXT", newText: text } as const;
};

let store: StoreType = {
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action: any) {
    switch (action.type) {
      case "ADD-POST":
        const newPost = {
          id: new Date().getTime(),
          post: this._state.prifilePage.newPostText,
          likes: 0,
        };
        this._state.prifilePage.posts.push(newPost);
        this._state.prifilePage.newPostText = "";
        this._callSubscriber(this._state);
        break;

      case "UPDATE-NEW-POST-TEXT":
        this._state.prifilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
        break;

      case "ADD-MESSAGE":
        const newMessage = {
          id: new Date().getTime(),
          text: this._state.messagePage.newMessageText,
        };
        this._state.messagePage.messages.push(newMessage);
        this._state.messagePage.newMessageText = "";
        this._callSubscriber(this._state);
        break;

      case "UPDATE-NEW-MESSAGE-TEXT":
        this._state.messagePage.newMessageText = action.newText;
        this._callSubscriber(this._state);
        break;
    }
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
