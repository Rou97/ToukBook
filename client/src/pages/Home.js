import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

export default function Home() {
  const { userData } = useContext(UserContext);

  return (
    <div className="page">
      {userData.user ? (
        <div>
          <h1>Welcome {userData.user.displayName}</h1>
          <Link to="/search">Search</Link>
          <Link to="/library">Library</Link>
          <Link to="/match">Match</Link>
        </div>
      ) : (
          <button>
            <h2>You are not logged in</h2>
            <Link to="/login">Log in</Link>
          </button>
        )}
    </div>
  );
}
