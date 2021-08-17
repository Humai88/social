import React, { useState } from "react";
import Input from "../../UI/Input/Input";
import styles from "./ProfileStatus.module.scss";
type ProfileStatusPropsType = {
  status: string;
};
export const ProfileStatus: React.FC<ProfileStatusPropsType> = ({ status }) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const dounbleClickCallback = () => {
    setEditMode(true);
  };
  const onBlurCallback = () => {
    setEditMode(false);
  };
  const onEnterCallback = () => {
    setEditMode(false);
  };
  return (
    <>
      {editMode ? (
        <div>
          <Input
            autoFocus={true}
            onEnter={onEnterCallback}
            onBlur={onBlurCallback}
            type="text"
            value={status}
          />
        </div>
      ) : (
        <div className={styles.status}>
          <span onDoubleClick={dounbleClickCallback}>{status}</span>
        </div>
      )}
    </>
  );
};
