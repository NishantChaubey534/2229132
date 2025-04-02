import React from "react"; 
import { useEffect, useState } from "react";
import { fetchUsers, fetchPostsByUser } from "../api";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadFeed = async () => {
      const users = await fetchUsers();
      let allPosts = [];
      for (let userId in users) {
        const userPosts = await fetchPostsByUser(userId);
        userPosts.forEach(post => allPosts.push({ ...post, username: users[userId] }));
      }
      allPosts.sort((a, b) => b.id - a.id); 
      setPosts(allPosts);
    };
    loadFeed();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Real-Time Feed</h2>
      <div className="mt-4">
        {posts.map((post) => (
          <div key={post.id} className="p-4 bg-white shadow rounded-lg mb-4">
            <p className="text-lg font-semibold">{post.username}</p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;
