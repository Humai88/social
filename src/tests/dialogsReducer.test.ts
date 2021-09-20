import {
  addMessageAC,
  dialogsReducer,
  MessagePageType,
  updateNewMessageTextAC,
} from "../redux/dialogsReducer";

let startState: MessagePageType;
beforeEach(() => {
  startState = {
    dialogs: [
      {
        id: "1",
        name: "Ann",
        image:
          "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "2",
        name: "Alex",
        image:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "3",
        name: "Nick",
        image:
          "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "4",
        name: "Max",
        image:
          "https://images.unsplash.com/photo-1623930154261-37f8b293c059?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "5",
        name: "Kate",
        image:
          "https://images.unsplash.com/photo-1587568787539-3f70370dd715?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
    ],
    messages: [
      { id: "m1", text: "Hi" },
      { id: "m2", text: "How are you?" },
      { id: "m3", text: "Fine, thanks" },
    ],
    newMessageText: "",
  };
});
test("post should be added", () => {
  const endState = dialogsReducer(startState, addMessageAC());
  expect(endState.messages.length).toBe(4);
});
test("post should be added", () => {
  const endState = dialogsReducer(
    startState,
    updateNewMessageTextAC("New message")
  );
  expect(endState.newMessageText).toBe("New message");
});
