import React from "react";
import classes from './Users.module.css';
import UserCard from './UserCard/UserCard';
import { Pagination } from "@mui/material";
import Preloader from "../common/Preloader/Preloader";


function Users(props) {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
        if (i === 100) {
            break;
        }
    }

    const handleChange = (event, value) => {
        props.onPageChanged(value);
    }

    return (
        <div className={classes.users}>
            <div> <h2>Users</h2></div>
            {props.isFetching ? <Preloader /> :
                <div className={classes.userPreview}>
                    {props.users.map((user) => {
                        return (
                            <UserCard id={user.id}
                                fullName={user.name}
                                followed={user.followed}
                                photoSmall={user.photos.small}
                                status={user.status}
                                city={"user.location.city"}
                                country={"user.location.country"}
                                requestInProgress={props.requestInProgress}
                                toggleRequestProgress={props.toggleRequestProgress}
                                followUser={props.followUser}
                                unfollowUser={props.unfollowUser} />
                        )
                    })}
                </div>}
            <div className={classes.pageNumbers}>
                <Pagination count={pages.length} onChange={handleChange} />
            </div>
        </div>
    )
}
export default Users;