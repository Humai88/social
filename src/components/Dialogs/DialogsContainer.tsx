import { Dialogs } from "./Dialogs";
import { RootStateType } from "../../redux/reduxStore";
import { MessagePageType } from "./../../redux/dialogsReducer";
import {
  addMessageAC,
  updateNewMessageTextAC,
} from "./../../redux/dialogsReducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "./../../hoc/authRedirect";
import { compose } from "redux";

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

export const DialogsContainer = compose<React.ComponentType>(
  connect(mapStateToProps, {
    updateNewMessage: updateNewMessageTextAC,
    addMessage: addMessageAC,
  }),
  withAuthRedirect
)(Dialogs);
