import { ChangeEvent, useRef, useState } from "react";
import { ProfileResponseType } from "../../../api/api";
import { Preloader } from "../../../common/Preloader/Preloader";
import { Avatar } from "../../UI/Avatar/Avatar";
import styles from "./Cover.module.scss";
import { Info } from "./Info/Info";
import { MdPhotoCamera } from "react-icons/md";

export const Cover: React.FC<CoverPropsType> = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
}) => {
  const inRef = useRef<HTMLInputElement>(null);
  const selectPhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.files && savePhoto(e.target.files[0]);
  };

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
          {isOwner && (
            <div>
              <label className={styles.iconUpload}>
                <MdPhotoCamera
                  onClick={() =>
                    inRef && inRef.current && inRef.current.click()
                  }
                />
              </label>
              <input
                style={{ display: "none" }}
                ref={inRef}
                type="file"
                onChange={selectPhotoHandler}
              ></input>
            </div>
          )}
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
  isOwner: boolean;
  savePhoto: any;
};
