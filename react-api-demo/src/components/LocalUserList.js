import React, { useEffect, useState } from "react";

function LocalUserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/users.json")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load local users");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading local users...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Local Users</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name} - {u.email} - {u.phone}</li>
        ))}
      </ul>
    </div>
  );
}

export default LocalUserList;