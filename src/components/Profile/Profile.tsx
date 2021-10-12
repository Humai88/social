import { Fragment } from "react";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { Cover } from "./Cover/Cover";
import { ProfileResponseType } from "../../api/api";
import styles from "./Profile.module.scss";

export const Profile: React.FC<ProfilePropsType> = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
}) => {
  return (
    <Fragment>
      <Cover
        savePhoto={savePhoto}
        isOwner={isOwner}
        profile={profile}
        status={status}
        updateStatus={updateStatus}
      />
      <MyPostsContainer />
    </Fragment>
  );
};

// Types
type ProfilePropsType = {
  profile: ProfileResponseType;
  status: string;
  updateStatus: (status: string) => void;
  autorizedUserId: number | null;
  isAuth: boolean;
  isOwner: boolean;
  savePhoto: any;
};
