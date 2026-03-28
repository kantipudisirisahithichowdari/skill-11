import React, { useState } from "react";
import LocalUserList from "./LocalUserList";
import UserList from "./UserList";
import FakePostList from "./FakePostList";

function Dashboard() {
  const [view, setView] = useState("");

  return (
    <div>
      <h1>📊 Dashboard</h1>
      <button onClick={() => setView("local")}>Local Users</button>
      <button onClick={() => setView("api")}>Users API</button>
      <button onClick={() => setView("fake")}>Fake API Posts</button>

      <div className="content">
        {view === "local" && <LocalUserList />}
        {view === "api" && <UserList />}
        {view === "fake" && <FakePostList />}
      </div>
    </div>
  );
}

export default Dashboard;