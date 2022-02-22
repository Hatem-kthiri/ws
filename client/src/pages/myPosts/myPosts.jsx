import React, { useEffect } from "react";
import "./myPosts.css";
import {
    get_current_posts,
    delete_current_post,
} from "../../redux/actions/post";
import { useDispatch, useSelector } from "react-redux";
const MyPosts = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_current_posts());
    }, []);
    const myPosts = useSelector((state) => state.postReducer.myPosts);
    return (
        <div className="posts">
            {myPosts.map((post) => {
                return (
                    <div class="post-card">
                        <div class="info">
                            <img
                                src={post && post.img}
                                alt="Image"
                                class="postImg"
                            />
                            <h4 class="postTitle">{post && post.title}</h4>
                            <p class="postDescription">
                                {post && post.postDescription}
                            </p>
                            <div className="PostCard-btn">
                                <button id="editButton">Edit</button>
                                <button
                                    id="deleteButton"
                                    onClick={delete_current_post(post._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default MyPosts;
