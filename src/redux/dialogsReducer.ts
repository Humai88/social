import { v1 } from "uuid";
export type MessagePageType = {
  dialogs: DialogsDataType;
  messages: MessageDataType;
  newMessageText: string;
};
export type MessageType = {
  id: string;
  text: string;
};

export type MessageDataType = Array<MessageType>;
export type DialogType = {
  id: string;
  name: string;
  image: string;
};
export type DialogsDataType = Array<DialogType>;
const initialState: MessagePageType = {
  dialogs: [
    {
      id: v1(),
      name: "Ann",
      image:
        "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: v1(),
      name: "Alex",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: v1(),
      name: "Nick",
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: v1(),
      name: "Max",
      image:
        "https://images.unsplash.com/photo-1623930154261-37f8b293c059?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: v1(),
      name: "Kate",
      image:
        "https://images.unsplash.com/photo-1587568787539-3f70370dd715?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ],
  messages: [
    { id: v1(), text: "Hi" },
    { id: v1(), text: "How are you?" },
    { id: v1(), text: "Fine, thanks" },
  ],
  newMessageText: "",
};

export const dialogsReducer = (
  state = initialState,
  action: ActionDialogsTypes
): MessagePageType => {
  switch (action.type) {
    case "ADD-MESSAGE":
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: v1(),
            text: state.newMessageText,
          },
        ],
        newMessageText: "",
      };

    case "UPDATE-NEW-MESSAGE-TEXT":
      return {
        ...state,
        newMessageText: action.payload.newText,
      };

    default:
      return state;
  }
};

export type ActionDialogsTypes =
  | ReturnType<typeof updateNewMessageTextAC>
  | ReturnType<typeof addMessageAC>;

// Action Creators
export const addMessageAC = () => {
  return {
    type: "ADD-MESSAGE",
  } as const;
};

export const updateNewMessageTextAC = (newText: string) => {
  return { type: "UPDATE-NEW-MESSAGE-TEXT", payload: { newText } } as const;
};
