import React from "react";
import { UsersPropsType } from "./UsersContainer";
import styles from "./Users.module.scss";
import { Avatar } from "../UI/Avatar/Avatar";
import { Button } from "../UI/Button/Button";
import { v1 } from "uuid";

export const Users: React.FC<UsersPropsType> = ({
  users,
  follow,
  unfollow,
  setUsers,
}) => {
  if (users.length === 0) {
    setUsers([
      {
        id: v1(),
        followed: true,
        fullName: "Ann",
        status:
          "To success in life... You need two things... Ignorance and Confidence...",
        location: {
          city: "Odessa",
          country: "Ukraine",
        },
        image:
          "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: v1(),
        followed: false,
        fullName: "Alex",
        status: "I’m born to express, not to impress.",
        location: {
          city: "Baku",
          country: "Azerbaijan",
        },
        image:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: v1(),
        followed: true,
        fullName: "Nick",
        status: "My life ,my rule,that’s my attitude…",
        location: {
          city: "Manchester",
          country: "United Kingdom",
        },
        image:
          "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: v1(),
        followed: true,
        fullName: "Max",
        status: "Hard Work + Dream + Dedication = Success.",
        location: {
          city: "Minsk",
          country: "Belarus",
        },
        image:
          "https://images.unsplash.com/photo-1623930154261-37f8b293c059?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: v1(),
        followed: false,
        fullName: "Kate",
        status: "Smile and the world smiles with you.",
        location: {
          city: "Paris",
          country: "France",
        },
        image:
          "https://images.unsplash.com/photo-1587568787539-3f70370dd715?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
    ]);
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
                <Avatar src={u.image} className={styles.img} />
              </div>
              <div>
                {u.followed ? (
                  <Button onClick={onFollowHandler} className={styles.btn}>
                    follow
                  </Button>
                ) : (
                  <Button onClick={onUnfollowHandler} className={styles.btn}>
                    unfollow
                  </Button>
                )}
              </div>
            </span>
            <span className={styles.infoWrapper}>
              <h3 className={styles.name}>{u.fullName}</h3>
              <p className={styles.status}>{u.status}</p>
              <p className={styles.location}>
                {u.location.city}, {u.location.country}
              </p>
            </span>
          </div>
        );
      })}
    </div>
  );
};
