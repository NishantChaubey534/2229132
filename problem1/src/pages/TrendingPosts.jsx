
import React, { useEffect, useState } from "react";
import { fetchTrendingPosts } from "../api";

function TrendingPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadTrendingPosts = async () => {
      const trendingPosts = await fetchTrendingPosts();
      setPosts(trendingPosts.slice(0, 5)); 
    };

    loadTrendingPosts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Trending Posts</h2>
      <div className="mt-4">
        {posts.map((post) => (
          <div key={post.id} className="p-4 bg-white shadow rounded-lg mb-4">
            <p className="text-lg font-semibold">{post.username}</p>
            <p>{post.content}</p>
            <p className="text-sm text-gray-500">Comments: {post.commentCount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingPosts;
