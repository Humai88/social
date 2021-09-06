import { ProfileResponseType } from "../../../api/api";
import { Preloader } from "../../../common/Preloader/Preloader";
import { Avatar } from "../../UI/Avatar/Avatar";
import styles from "./Cover.module.scss";
import { Info } from "./Info/Info";

export const Cover: React.FC<CoverPropsType> = ({
  profile,
  status,
  updateStatus,
}) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div className={styles.wallpaper}>
      <div className={styles.wrapper}>
        <div>
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
        <Info profile={profile} status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

// Types
type CoverPropsType = {
  profile: ProfileResponseType;
  status: string;
  updateStatus: (status: string) => void;
};
