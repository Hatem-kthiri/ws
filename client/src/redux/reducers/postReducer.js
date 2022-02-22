import { GET_POSTS, GET_CURRENT_POST } from "../constants/actions-types";
const initialState = {
    posts: [],
    myPosts: [],
};

const postReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_POSTS:
            return { ...state, posts: payload.posts };
        case GET_CURRENT_POST:
            return { ...state, myPosts: payload.currentPosts };
        default:
            return state;
    }
};

export default postReducer;
