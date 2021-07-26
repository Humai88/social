import { Fragment } from "react";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { Cover } from "./Cover/Cover";
import { ProfileResponseType } from "../../redux/profileReducer";

type ProfilePropsType = {
  profile: ProfileResponseType;
};
export const Profile = ({ profile }: ProfilePropsType) => {
  return (
    <Fragment>
      <Cover profile={profile} />
      <MyPostsContainer />
    </Fragment>
  );
};
