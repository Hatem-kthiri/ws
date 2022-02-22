import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_posts } from "../../redux/actions/post";

export default function Home({ darkMode }) {
    const posts = useSelector((state) => state.postReducer.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_posts());
    }, []);
    return (
        <>
            <Header />
            <div className="home">
                <Posts Posts={posts} />
                <Sidebar darkMode={darkMode} />
            </div>
        </>
    );
}
