import "./post.css";

export default function Post({ post }) {
    return (
        <div class="post-card">
            <div class="info">
                <img src={post.img} alt="Image" class="postImg" />
                <h4 class="postTitle">{post.title}</h4>
                <p class="postDescription">{post.postDescription}</p>
                <button href="#" class="detail-button">
                    Detail
                </button>
            </div>
        </div>
    );
}
