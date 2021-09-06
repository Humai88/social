import { MyPosts } from "./MyPosts";
import { RootStateType } from "../../../redux/reduxStore";
import {
  addPostAC,
  updateNewPostTextAC,
  PostsDataType,
} from "../../../redux/profileReducer";
import { connect } from "react-redux";

const mapStateToProps = (state: RootStateType): mapStateType => {
  return {
    data: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

export const MyPostsContainer = connect(mapStateToProps, {
  updateNewPostText: updateNewPostTextAC,
  addPost: addPostAC,
})(MyPosts);

// Types
type mapStateType = {
  data: PostsDataType;
  newPostText: string;
};
type mapDispatchType = {
  updateNewPostText: (text: string) => void;
  addPost: () => void;
};
export type ProfilePropsType = mapStateType & mapDispatchType;
