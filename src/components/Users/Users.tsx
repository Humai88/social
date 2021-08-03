import styles from "./Users.module.scss";
import { Avatar } from "../UI/Avatar/Avatar";
import { Button } from "../UI/Button/Button";
import { UserType } from "./../../redux/usersReducer";
import { NavLink } from "react-router-dom";
const axios = require("axios").default;

type UserPropsType = {
  totalUsersCout: number;
  pageSize: number;
  currentPage: number;
  users: UserType[];
  onChangePageHandler: (p: number) => void;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
};
export type CreateFollowResponseType = {
  data: { resultCode: number; messages: string[]; data: {} };
};
export const Users: React.FC<UserPropsType> = (props) => {
  const {
    totalUsersCout,
    pageSize,
    currentPage,
    onChangePageHandler,
    users,
    follow,
    unfollow,
  } = props;

  let pagesCount = Math.ceil(totalUsersCout / pageSize / 100);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.pageButtons}>
        {pages.map((p, i) => {
          return (
            <span
              key={i}
              className={currentPage === p ? styles.selectedPage : ""}
              onClick={() => {
                onChangePageHandler(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {users.map((u) => {
        const onFollowHandler = () => {
          axios
            .post(
              `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
              {},
              {
                withCredentials: true,
                headers: {
                  "API-KEY": "b108fd33-d977-4add-bda9-9da2037bdf7a",
                },
              }
            )
            .then((resp: CreateFollowResponseType) => {
              if (resp.data.resultCode === 0) {
                follow(u.id);
              }
            });
        };
        const onUnfollowHandler = () => {
          axios
            .delete(
              `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
              {
                withCredentials: true,
                headers: {
                  "API-KEY": "b108fd33-d977-4add-bda9-9da2037bdf7a",
                },
              }
            )
            .then((resp: CreateFollowResponseType) => {
              if (resp.data.resultCode === 0) {
                unfollow(u.id);
              }
            });
        };
        return (
          <div key={u.id} className={styles.wrapper}>
            <span className={styles.avatarWrapper}>
              <NavLink to={"/profile/" + u.id}>
                <Avatar
                  src={
                    u.photos.small != null
                      ? u.photos.small
                      : "https://image.flaticon.com/icons/png/512/1077/1077275.png"
                  }
                  className={styles.img}
                />
              </NavLink>
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
