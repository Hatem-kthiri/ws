// import { Link } from "react-router-dom";
// import "./topbar.css";
// import DarkModeToggle from "react-dark-mode-toggle";
// export default function Topbar({darkMode}) {
//   const user = false;

//   return (
//     <div className="top">
//       <div className="topLeft">
//         <i className="topIcon fa-brands fa-facebook"></i>
//         <i className="topIcon fa-brands fa-twitter-square"></i>
//         <i className="topIcon fa-brands fa-instagram"></i>
//       </div>

//       <div className="topCenter">
//         <ul className="topList">
//           <li className="topListItem">
//             <Link className="link" to="/">
//               HOME
//             </Link>
//           </li>
//           <li className="topListItem">
//             {" "}
//             <Link className="link" to="/">
//               ABOUT
//             </Link>
//           </li>
//           <li className="topListItem">
//             {" "}
//             <Link className="link" to="/">
//               CONTACT
//             </Link>
//           </li>
//           <li className="topListItem">
//             {" "}
//             <Link className="link" to="/write">
//               WRITE
//             </Link>
//           </li>

//           <li className="topListItem">{user && "LOGOUT"}</li>
//           <li style={{ marginTop: "25px" }}>
//             {" "}
//             <DarkModeToggle
//               onChange={darkMode.toggle}
//               checked={darkMode.value}
//               size={40}
//             />
//           </li>
//         </ul>
//       </div>
//       <div className="topRight">
//         {user ? (
//           <img
//             className="topImg"
//             src="data:image/jpeg;base64,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"
//             alt=""
//           />
//         ) : (
//           <ul className="topList">
//             <li className="topListItem">
//               <Link className="link" to="/login">
//                 LOGIN
//               </Link>
//             </li>
//             <li className="topListItem">
//               <Link className="link" to="/register">
//                 REGISTER
//               </Link>
//             </li>
//           </ul>
//         )}

//         <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
//       </div>
//     </div>
//   );
// }
import React from "react";
import "./topbar.css";
import DarkModeToggle from "react-dark-mode-toggle";
import { Link } from "react-router-dom";
const Topbar = ({ darkMode }) => {
    return (
        <div>
            <div class="top">
                <div class="top-header">
                    <a href="#" class="blog-title">
                        Blog
                    </a>

                    <div>
                        <div>
                            <ul class="navbar">
                                <li class="nav-item">
                                    <Link to="/" class="nav-link">
                                        Home
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/about" class="nav-link">
                                        About
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/" class="nav-link">
                                        Blog
                                    </Link>
                                </li>
                                <li class="nav-item" id="contact">
                                    <Link to="/contact" class="nav-link">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                            <DarkModeToggle
                                onChange={darkMode.toggle}
                                checked={darkMode.value}
                                size={40}
                                className={"darkModeToggle"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
