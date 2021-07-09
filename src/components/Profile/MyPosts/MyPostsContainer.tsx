import { MyPosts } from "./MyPosts";
import { RootStateType } from "../../../redux/reduxStore";
import {
  addPostAC,
  updateNewPostTextAC,
  PostsDataType,
} from "../../../redux/profileReducer";
import { connect } from "react-redux";
import { Dispatch } from "redux";

type mapStateType = {
  data: PostsDataType;
  newPostText: string;
};
type mapDispatchType = {
  updateNewPostText: (text: string) => void;
  addPost: () => void;
};
export type ProfilePropsType = mapStateType & mapDispatchType;

const mapStateToProps = (state: RootStateType): mapStateType => {
  return {
    data: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchType => {
  return {
    updateNewPostText: (text: string) => {
      dispatch(updateNewPostTextAC(text));
    },
    addPost: () => {
      dispatch(addPostAC());
    },
  };
};

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
