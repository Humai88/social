import React, { ChangeEvent, useEffect, useState } from "react";
import Input from "../../UI/Input/Input";
import styles from "./ProfileStatus.module.scss";

export const ProfileStatus: React.FC<ProfileStatusPropsType> = ({
  status,
  updateStatus,
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [currentStatus, setCurrentStatus] = useState<string>(status);
  const dounbleClickCallback = () => {
    setEditMode(true);
  };
  const onBlurCallback = () => {
    setEditMode(false);
    updateStatus(currentStatus);
  };

  const onEnterCallback = () => {
    setEditMode(false);
    updateStatus(currentStatus);
  };

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentStatus(e.currentTarget.value);
  };

  return (
    <>
      {editMode ? (
        <div>
          <Input
            onChange={onChangeCallback}
            autoFocus={true}
            onEnter={onEnterCallback}
            onBlur={onBlurCallback}
            type="text"
            value={currentStatus}
            className={styles.input}
          />
        </div>
      ) : (
        <div className={styles.status}>
          <span onDoubleClick={dounbleClickCallback}>
            {status || "Add status..."}
          </span>
        </div>
      )}
    </>
  );
};

// Types
type ProfileStatusPropsType = {
  status: string;
  updateStatus: (status: string) => void;
};
