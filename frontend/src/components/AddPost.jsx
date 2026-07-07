import { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_POST } from "../graphql/mutations";
import { GET_POSTS } from "../graphql/queries";
import toast from "react-hot-toast";

function AddPost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [errors, setErrors] = useState({
    title: "",
    content: "",
    });

    const [addPost, { loading }] = useMutation(ADD_POST, {
        refetchQueries: [{ query: GET_POSTS }],
    });

    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {
            title: "",
            content: "",
        };

        let isValid = true;

        if (!title.trim()) {
            newErrors.title = "Title is required.";
            isValid = false;
        }

        if (!content.trim()) {
            newErrors.content = "Content is required.";
            isValid = false;
        }

        setErrors(newErrors);

        if (!isValid) return;

        try {
            await addPost({
            variables: {
                title,
                content,
            },
            });

            setTitle("");
            setContent("");

            setErrors({
            title: "",
            content: "",
            });

            toast.success("🎉 Blog published successfully!");
        } catch (err) {
            toast.error("Unable to publish the blog.");
        }
    };

    return (
        <div className="form-container">
            <h2>Add New Blog</h2>

            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Enter blog title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />

                {errors.title && (
                    <p className="error-text">{errors.title}</p>
                )}

                <textarea
                rows="5"
                placeholder="Write your content..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                />

                {errors.content && (
                    <p className="error-text">{errors.content}</p>
                )}

                <button type="submit" disabled={loading}>
                {loading ? "Adding..." : "Add Post"}
                </button>
            </form>
        </div>
  );
}

export default AddPost;