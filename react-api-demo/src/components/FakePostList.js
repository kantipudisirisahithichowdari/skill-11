import React, { useEffect, useState } from "react";
import axios from "axios";

function FakePostList() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchPosts = () => {
    setLoading(true);
    axios.get("https://dummyjson.com/posts")
      .then((res) => {
        setPosts(res.data.posts);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filteredPosts = filter
    ? posts.filter((p) => p.userId === parseInt(filter))
    : posts;

  return (
    <div>
      <h2>Fake API Posts</h2>
      <button onClick={fetchPosts}>🔄 Refresh</button>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All Users</option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>

      {loading ? <p>Loading posts...</p> : (
        <ul>
          {filteredPosts.map((p) => (
            <li key={p.id}><strong>{p.title}</strong> - {p.body}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FakePostList;