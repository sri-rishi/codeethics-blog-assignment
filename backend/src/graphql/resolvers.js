import Post from "../models/Post.js";

const resolvers = {
  Query: {
    posts: async () => {
      return await Post.find().sort({ createdAt: -1 });
    },
  },

  Mutation: {
    addPost: async (_, { title, content }) => {
      const post = await Post.create({
        title,
        content,
      });

      return post;
    },
  },
};

export default resolvers;