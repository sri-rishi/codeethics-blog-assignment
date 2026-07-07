import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../graphql/queries";
import PostCard from "./PostCard";

function PostList() {
  const { loading, error, data } = useQuery(GET_POSTS);

    if (loading) {
        return (
            <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading blogs...</p>
            </div>
        );
    }

  if (error) return <h2>{error.message}</h2>;

  if (!data.posts.length) {
    return (
        <div className="empty-state">
            <div className="empty-icon">📝</div>

            <h2>No blogs yet</h2>

            <p>Create your first blog using the form above.</p>
        </div>
    );
  }

  return (
    <div className="posts">
      {data.posts.map((post) => (
        <PostCard
          key={post._id}
          post={post}
        />
      ))}
    </div>
  );
}

export default PostList;