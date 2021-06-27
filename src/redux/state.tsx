// import { v1 } from "uuid";
let store: StoreType = {
  _state: {
    prifilePage: {
      posts: [
        { id: 1, post: "Hi, Gumay", likes: 7 },
        { id: 2, post: "How are you?", likes: 9 },
        { id: 3, post: "Fine, thanks", likes: 15 },
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
    },
  },

  _callSubscriber(state: RootStateType) {
    console.log("changed");
  },

  getState() {
    return this._state;
  },

  addPost(newPostText: string) {
    const newPost = {
      id: new Date().getTime(),
      post: this._state.prifilePage.newPostText,
      likes: 0,
    };
    this._state.prifilePage.posts.push(newPost);
    this._state.prifilePage.newPostText = "";
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText: string) {
    this._state.prifilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

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
};
export type RootStateType = {
  prifilePage: profilePageType;
  messagePage: messagePageType;
};
export type StoreType = {
  _state: RootStateType;
  getState: () => RootStateType;
  _callSubscriber: (state: RootStateType) => void;
  addPost: (newPostText: string) => void;
  updateNewPostText: (newText: string) => void;
  subscribe: (observer: (state: RootStateType) => void) => void;
};
export default store;
