const API_BASE_URL = "http://20.244.56.144/evaluation-service";
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzNjAzNTM2LCJpYXQiOjE3NDM2MDMyMzYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjU5NTNmMzBlLTM0NTAtNDc5ZS04YWQ2LWE0OTQyNGVmNTU1MyIsInN1YiI6IjIyMjkxMzJAa2lpdC5hYy5pbiJ9LCJlbWFpbCI6IjIyMjkxMzJAa2lpdC5hYy5pbiIsIm5hbWUiOiJuaXNoYW50IGt1bWFyIGNoYXViZXkiLCJyb2xsTm8iOiIyMjI5MTMyIiwiYWNjZXNzQ29kZSI6Im53cHdyWiIsImNsaWVudElEIjoiNTk1M2YzMGUtMzQ1MC00NzllLThhZDYtYTQ5NDI0ZWY1NTUzIiwiY2xpZW50U2VjcmV0IjoiSHF5RUpRa0dlU3VmSnR5UyJ9.tqQiqYpXgO26IPEP531OHi6bUpaeJIUTPn0sVPv_KI8";

const headers = {
  "Authorization": `Bearer ${ACCESS_TOKEN}`,
  "Content-Type": "application/json",
};


export const fetchUsers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`, { method: "GET", headers });
    if (!response.ok) throw new Error(`Error fetching users: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};


export const fetchPostsByUser = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}/posts`, { method: "GET", headers });
    if (!response.ok) throw new Error(`Error fetching posts: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};


export const fetchCommentsByPost = async (postId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${postId}/comments`, { method: "GET", headers });
    if (!response.ok) throw new Error(`Error fetching comments: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchTrendingPosts = async () => {
  try {
    const users = await fetchUsers();
    if (!users) throw new Error("Failed to fetch users");

    let allPosts = [];
    for (let user of users) {
      const userPosts = await fetchPostsByUser(user.id);
      if (userPosts) {
        allPosts.push(...userPosts.map(post => ({ ...post, username: user.name })));
      }
    }

    for (let post of allPosts) {
      const comments = await fetchCommentsByPost(post.id);
      post.commentCount = comments ? comments.length : 0;
    }

    allPosts.sort((a, b) => b.commentCount - a.commentCount);
    return allPosts;
  } catch (error) {
    console.error(error);
    return [];
  }
};
