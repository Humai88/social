import { Fragment } from "react";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { Cover } from "./Cover/Cover";
import { ProfileResponseType } from "../../redux/profileReducer";
import { Redirect } from "react-router-dom";

type ProfilePropsType = {
  profile: ProfileResponseType;
  isAuth: boolean;
};
export const Profile: React.FC<ProfilePropsType> = ({ profile, isAuth }) => {
  if (!isAuth) return <Redirect to="/login" />;
  return (
    <Fragment>
      <Cover profile={profile} />
      <MyPostsContainer />
    </Fragment>
  );
};
