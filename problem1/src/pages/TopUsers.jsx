import React from "react"; 
import { useEffect, useState } from "react";
import { fetchUsers } from "../api";

const TopUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      if (data) {
        const sortedUsers = Object.entries(data.users)
          .slice(0, 5) 
          .map(([id, name]) => ({ id, name }));
        setUsers(sortedUsers);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-semibold mb-3">🔥 Top Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} className="mb-2">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;
