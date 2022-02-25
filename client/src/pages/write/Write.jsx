import "./write.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add_post } from "../../redux/actions/post";
import { useHistory } from "react-router-dom";
import axios from "axios";
const Write = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    // const [newPost, setNewPost] = useState("");
    // const handleFile = (e) => {
    //     getBase64(e.target.files[0]).then((data) =>
    //         setNewPost({ ...newPost, img: data })
    //     );
    // };
    // const handleChange = (e) => {
    //     setNewPost({ ...newPost, [e.target.name]: e.target.value });
    // };
    // const getBase64 = (file) => {
    //     return new Promise((resolve, reject) => {
    //         const reader = new FileReader();
    //         reader.readAsDataURL(file);
    //         reader.onload = () => resolve(reader.result);
    //         reader.onerror = (error) => reject(error);
    //     });
    // };
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [link, setLink] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = new FormData();

        newPost.append("postDescription", text);
        newPost.append("title", title);
        if (link) {
            newPost.append("img", link);
        }
        dispatch(add_post(newPost, history));
    };
    return (
        <div className="write">
            <img
                className="writeImg"
                src="https://img-19.ccm2.net/iBYO1DOif2mcoMT7crnZ0Yy3XaU=/480x270/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
                alt=""
            />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input
                        className="field-description"
                        name="title"
                        placeholder=" Write Here .. "
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    {/* <input
                        type="text"
                        placeholder="title"
                        className="writeInput"
                        autoFocus={true}
                        name="title"
                        onChange={handleChange}
                    /> */}
                </div>
                <div className="writeFormGroup">
                    <textarea
                        className="field-description"
                        name="description"
                        placeholder=" Write Here .. "
                        onChange={(e) => setText(e.target.value)}
                    />

                    {/* <textarea
                        placeholder="tell your story ..."
                        type="text"
                        className="writeInput writeText"
                        name="postDescription"
                        onChange={handleChange}
                    ></textarea> */}
                </div>
                <div className="inputButton">
                    <input
                        type="file"
                        placeholder="image"
                        name="img"
                        accept="image/png, image/jpeg "
                        onChange={(e) => setLink(e.target.files[0])}
                    />

                    {/* <input
                        type="file"
                        id="fileInput"
                        name="uploaded_file"
                        onChange={handleFile}
                    /> */}
                    <button className="writeSubmit" onClick={handleSubmit}>
                        Publish
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Write;
