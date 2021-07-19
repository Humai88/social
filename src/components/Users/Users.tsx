import styles from "./Users.module.scss";
import { UsersPropsType } from "./UsersContainer";
import { Avatar } from "../UI/Avatar/Avatar";
import { Button } from "../UI/Button/Button";
import { CreateUsersResponseType } from "../../redux/usersReducer";
import React, { Component } from "react";
const axios = require("axios").default;

class Users extends Component<UsersPropsType> {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((resp: CreateUsersResponseType) => {
        this.props.setUsers(resp.data.items);
        this.props.setTotalUsersCount(resp.data.totalCount);
      });
  }
  onChangePageHandler = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((resp: CreateUsersResponseType) => {
        this.props.setUsers(resp.data.items);
      });
  };
  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCout / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <div className={styles.mainWrapper}>
        <div className={styles.pageButtons}>
          {pages.map((p) => {
            return (
              <span
                className={
                  this.props.currentPage === p ? styles.selectedPage : ""
                }
                onClick={() => {
                  this.onChangePageHandler(p);
                }}
              >
                {p}
              </span>
            );
          })}
        </div>
        {this.props.users.map((u) => {
          const onFollowHandler = () => {
            this.props.follow(u.id);
          };
          const onUnfollowHandler = () => {
            this.props.unfollow(u.id);
          };
          return (
            <div key={u.id} className={styles.wrapper}>
              <span className={styles.avatarWrapper}>
                <div>
                  <Avatar
                    src={
                      u.photos.small != null
                        ? u.photos.small
                        : "https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png"
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
  }
}

export default Users;
