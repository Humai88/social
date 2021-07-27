import { Preloader } from "../../../common/Preloader/Preloader";
import { ProfileResponseType } from "../../../redux/profileReducer";
import { Avatar } from "../../UI/Avatar/Avatar";
import styles from "./Cover.module.scss";
import { Info } from "./Info/Info";
type CoverPropsType = {
  profile: ProfileResponseType;
};
export const Cover: React.FC<CoverPropsType> = ({ profile }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar__wrapper}>
        <Avatar
          className={styles.avatar}
          src={
            profile.photos.large != null
              ? profile.photos.large
              : "https://image.flaticon.com/icons/png/512/1077/1077275.png"
          }
          alt=""
        />
      </div>
      <Info profile={profile} />
    </div>
  );
};
