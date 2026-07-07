function PostCard({ post }) {
  return (
    <div className="post-card">
        <h3>{post.title}</h3>

        <p>{post.content}</p>

        <small>
            {new Date(Number(post.createdAt)).toLocaleString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            })}
        </small>
    </div>
  );
}

export default PostCard;