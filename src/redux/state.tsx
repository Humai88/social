export type PostType = {
  id: number;
  post: string;
  likes: number;
};
export type PostsDataType = Array<PostType>;

export type DialogType = {
  id: number;
  name: string;
};
export type DialogsDataType = Array<DialogType>;

export type MessageType = {
  id: number;
  text: string;
};
export type MessageDataType = Array<MessageType>;
export type profilePageType = {
  posts: PostsDataType;
};
export type messagePageType = {
  dialogs: DialogsDataType;
  messages: MessageDataType;
};
export type RootStateType = {
  prifilePage: profilePageType;
  messagePage: messagePageType;
};

let state = {
  prifilePage: {
    posts: [
      { id: 1, post: "Hi, Gumay", likes: 7 },
      { id: 2, post: "How are you?", likes: 9 },
      { id: 3, post: "Fine, thanks", likes: 15 },
    ],
  },
  messagePage: {
    dialogs: [
      { id: 1, name: "Ann" },
      { id: 2, name: "Alex" },
      { id: 3, name: "Nick" },
      { id: 4, name: "Max" },
      { id: 5, name: "Kate" },
    ],
    messages: [
      { id: 1, text: "Hi" },
      { id: 2, text: "How are you?" },
      { id: 3, text: "Fine, thanks" },
    ],
  },
};

export default state;
