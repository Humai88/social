import { Fragment } from "react";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { Cover } from "./Cover/Cover";
import { ProfileResponseType } from "../../api/api";

type ProfilePropsType = {
  profile: ProfileResponseType;
  status: string;
  updateStatus: (status: string) => void;
};
export const Profile: React.FC<ProfilePropsType> = ({
  profile,
  status,
  updateStatus,
}) => {
  return (
    <Fragment>
      <Cover profile={profile} status={status} updateStatus={updateStatus} />
      <MyPostsContainer />
    </Fragment>
  );
};
