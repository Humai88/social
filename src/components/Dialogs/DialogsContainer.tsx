import { Dialogs } from "./Dialogs";
import { RootStateType } from "../../redux/reduxStore";
import { messagePageType } from "./../../redux/dialogsReducer";
import {
  addMessageAC,
  updateNewMessageTextAC,
} from "./../../redux/dialogsReducer";
import { connect } from "react-redux";
import { Dispatch } from "redux";

type mapStateType = {
  data: messagePageType;
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
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchType => {
  return {
    updateNewMessage: (body: string) => {
      dispatch(updateNewMessageTextAC(body));
    },
    addMessage: () => {
      dispatch(addMessageAC());
    },
  };
};

export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);
