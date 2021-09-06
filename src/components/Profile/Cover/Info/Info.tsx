import { ProfileResponseType } from "../../../../api/api";
import { Preloader } from "../../../../common/Preloader/Preloader";
import { ProfileStatus } from "../../ProfileStatus/ProfileStatus";
import styles from "./Info.module.scss";

export const Info: React.FC<InfoPropsType> = ({
  profile,
  status,
  updateStatus,
}) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div className={styles.info}>
      <h3>{profile.fullName}</h3>

      <ProfileStatus status={status} updateStatus={updateStatus} />
      <div className={styles.headers}>
        About me:
        <span className={styles.span}> {profile.aboutMe}</span>
      </div>
      <div className={styles.headers}>
        Looking for a job:
        {profile.lookingForAJob ? (
          <img
            className={styles.img}
            alt="icon"
            src="https://image.flaticon.com/icons/png/512/545/545749.png"
          ></img>
        ) : (
          <img
            className={styles.img}
            alt="icon"
            src="https://image.flaticon.com/icons/png/512/545/545751.png"
          ></img>
        )}
      </div>
      <div className={styles.headers}>
        Type of job:
        <span className={styles.span}>
          {" "}
          {profile.lookingForAJobDescription}
        </span>
      </div>
      <div className={styles.headers}>
        Social-networks:{" "}
        {profile.contacts.instagram && (
          <a href={profile.contacts.instagram} className={styles.span}>
            <img
              className={styles.img}
              src="https://image.flaticon.com/icons/png/512/1400/1400487.png"
              alt=""
            />
          </a>
        )}
        {profile.contacts.facebook && (
          <a href={profile.contacts.facebook} className={styles.span}>
            <img
              className={styles.img}
              src="https://image.flaticon.com/icons/png/512/1400/1400477.png"
              alt=""
            />
          </a>
        )}
        {profile.contacts.twitter && (
          <a href={profile.contacts.twitter} className={styles.span}>
            <img
              className={styles.img}
              src="https://image.flaticon.com/icons/png/512/2525/2525779.png"
              alt=""
            />
          </a>
        )}
        {profile.contacts.youtube && (
          <a href={profile.contacts.youtube} className={styles.span}>
            <img
              className={styles.img}
              src="https://image.flaticon.com/icons/png/512/1400/1400484.png"
              alt=""
            />
          </a>
        )}
      </div>
    </div>
  );
};

// Types
type InfoPropsType = {
  profile: ProfileResponseType;
  status: string;
  updateStatus: (status: string) => void;
};
