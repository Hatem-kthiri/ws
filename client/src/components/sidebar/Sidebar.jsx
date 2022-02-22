import "./sidebar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { current, logout } from "../../redux/actions/user";
export default function Sidebar({ darkMode }) {
    const user = useSelector((state) => state.userReducer.user);
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(current());
    }, []);
    return (
        <div className={darkMode.value ? "sidebar darkMode" : "sidebar"}>
            <div className="sidebarItem">
                {isAuth ? (
                    <div className="profile">
                        <img
                            src={user && user.profileImg}
                            alt="image"
                            className="sidebarImg"
                        />
                        <p className="profileName">{user && user.userName}</p>
                        <Link to="/myposts">
                            <p>My Posts</p>
                        </Link>
                        <Link to="/">
                            <p onClick={() => dispatch(logout())}>LOGOUT</p>
                        </Link>
                    </div>
                ) : (
                    <div className="profile">
                        <Link to="/login" style={{ fontSize: "24px" }}>
                            Login/Register
                        </Link>
                    </div>
                )}
            </div>
            <div className="sidebarItem">
                <span
                    className={
                        darkMode.value
                            ? "sidebarTitle-darkMode"
                            : "sidebarTitle"
                    }
                >
                    CATEGORIES
                </span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span
                    className={
                        darkMode.value
                            ? "sidebarTitle-darkMode"
                            : "sidebarTitle"
                    }
                >
                    FOLLOW US
                </span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                    <i className="sidebarIcon fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
    );
}
