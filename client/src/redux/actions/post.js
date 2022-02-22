import { GET_POSTS, GET_CURRENT_POST } from "../constants/actions-types";
import axios from "axios";

export const get_posts = () => async (dispatch) => {
    try {
        let result = await axios.get("api/posts/");
        dispatch({ type: GET_POSTS, payload: result.data });
    } catch (error) {
        console.log(error);
    }
};

export const add_post = (newPost, history) => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
            newPost,
        };
        await axios
            .post("api/posts/addPost", config)
            .then(dispatch(get_posts()), history.push("/"));
    } catch (error) {
        console.log(error);
    }
};

export const get_current_posts = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        const result = await axios.get("api/posts/getCurrentPosts", config);
        dispatch({ type: GET_CURRENT_POST, payload: result.data });
    } catch (error) {
        console.log(error);
    }
};

export const delete_current_post = (id) => async (dispatch) => {
    console.log(id);
    axios
        .delete(`api/posts/deleteCurrentPosts/${id}`)
        .then(() => dispatch(get_current_posts()))
        .catch((err) => console.log(err));
};
// export const delete_current_post = (id) => async (dispatch) => {
//     try {
//         const config = {
//             headers: {
//                 authorization: localStorage.getItem("token"),
//             },
//         };
//         const result = await axios.delete(
//             `api/posts/deleteCurrentPosts/${id}`,
//             config
//         );
//         dispatch(get_current_posts());
//     } catch (error) {
//         console.log(error);
//     }
// };
