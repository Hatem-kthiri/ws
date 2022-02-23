import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import PostDetail from "../../components/PostDetail/PostDetail";
import { Switch, Route } from "react-router-dom";
import "./home.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_posts } from "../../redux/actions/post";
export default function Home({ darkMode, posts }) {
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
