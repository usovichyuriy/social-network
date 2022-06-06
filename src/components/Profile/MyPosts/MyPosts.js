import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import MyPostsForm from './MyPostsForm/MyPostsForm';

function MyPosts(props) {

    let postsElements = props.profilePage.postsData.map((post) => {
        return <Post message={post.message} likesCount={post.likesCount} profile={props.profilePage.profile} />
    })

    return (
        <div className={classes.myPosts}>
            <h3>My posts</h3>
            <div>
                <MyPostsForm updateNewPostText={props.updateNewPostText} addPost={props.addPost} />
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}
export default MyPosts;