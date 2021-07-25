import { Dialogs } from "./Dialogs";
import { RootStateType } from "../../redux/reduxStore";
import { MessagePageType } from "./../../redux/dialogsReducer";
import {
  addMessageAC,
  updateNewMessageTextAC,
} from "./../../redux/dialogsReducer";
import { connect } from "react-redux";

type mapStateType = {
  data: MessagePageType;
  newMessageText: string;
};
type mapDispatchType = {
  updateNewMessage: (body: string) => void;
  addMessage: () => void;
};
export type MassagesPropsType = mapStateType & mapDispatchType;

const mapStateToProps = (state: RootStateType): mapStateType => {
  return {
    data: state.messagePage,
    newMessageText: state.messagePage.newMessageText,
  };
};

export const DialogsContainer = connect(mapStateToProps, {
  updateNewMessage: updateNewMessageTextAC,
  addMessage: addMessageAC,
})(Dialogs);
