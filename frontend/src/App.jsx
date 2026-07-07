import "./App.css";

import AddPost from "./components/AddPost";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="container">

      <header>
        <h1>📝 Blog Application</h1>
        <p>GraphQL + React + MongoDB</p>
      </header>

      <AddPost />

      <hr />

      <PostList />

    </div>
  );
}

export default App;