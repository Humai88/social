// import { messagePageType } from "./store";
export type DialogType = {
  id: number;
  name: string;
  image: string;
};
export type DialogsDataType = Array<DialogType>;
export type messagePageType = {
  dialogs: DialogsDataType;
  messages: MessageDataType;
  newMessageText: string;
};
export type MessageType = {
  id: number;
  text: string;
};
export type MessageDataType = Array<MessageType>;
let initialState: messagePageType = {
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
};

export const dialogsReducer = (
  state = initialState,
  action: ActionDialogsTypes
) => {
  switch (action.type) {
    case "ADD-MESSAGE":
      const newMessage = {
        id: new Date().getTime(),
        text: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      break;

    case "UPDATE-NEW-MESSAGE-TEXT":
      state.newMessageText = action.newText;
      break;
    default:
      return state;
  }
  return state;
};

export type ActionDialogsTypes =
  | ReturnType<typeof updateNewMessageTextAC>
  | ReturnType<typeof addMessageAC>;

export const addMessageAC = () => {
  return {
    type: "ADD-MESSAGE",
  } as const;
};

export const updateNewMessageTextAC = (text: string) => {
  return { type: "UPDATE-NEW-MESSAGE-TEXT", newText: text } as const;
};
