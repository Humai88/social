import React from "react";
import { UsersPropsType } from "./UsersContainer";
import styles from "./Users.module.scss";
import { Avatar } from "../UI/Avatar/Avatar";
import { Button } from "../UI/Button/Button";
// import { v1 } from "uuid";
import { CreateUsersResponseType } from "./../../redux/usersReducer";
const axios = require("axios").default;

export const Users: React.FC<UsersPropsType> = ({
  users,
  follow,
  unfollow,
  setUsers,
}) => {
  if (users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((resp: CreateUsersResponseType) => {
        setUsers(resp.data.items);
      });
  }

  return (
    <div className={styles.mainWrapper}>
      {users.map((u) => {
        const onFollowHandler = () => {
          follow(u.id);
        };
        const onUnfollowHandler = () => {
          unfollow(u.id);
        };
        return (
          <div key={u.id} className={styles.wrapper}>
            <span className={styles.avatarWrapper}>
              <div>
                <Avatar
                  src={
                    u.photos.small != null
                      ? u.photos.small
                      : "https://cdn.pixabay.com/photo/2016/09/28/02/14/user-1699635_960_720.png"
                  }
                  className={styles.img}
                />
              </div>
              <div>
                {u.followed ? (
                  <Button onClick={onUnfollowHandler} className={styles.btn}>
                    unfollow
                  </Button>
                ) : (
                  <Button onClick={onFollowHandler} className={styles.btn}>
                    follow
                  </Button>
                )}
              </div>
            </span>
            <span className={styles.infoWrapper}>
              <h3 className={styles.name}>{u.name}</h3>
              <p className={styles.status}>{u.status}</p>
              {/* <p className={styles.location}>
                {u.location.city}, {u.location.country}
              </p> */}
            </span>
          </div>
        );
      })}
    </div>
  );
};
