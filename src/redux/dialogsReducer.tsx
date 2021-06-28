import { messagePageType } from "./state";

export const dialogsReducer = (
  state: messagePageType,
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
