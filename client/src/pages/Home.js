import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

export default function Home() {
  const { userData } = useContext(UserContext);

  const a = () => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=harry%20potter')
      .then(res => res.json())
      .then(res => console.log(res))
  }

  return (
    <div className="page">
      {userData.user ? (
        <div>
          <h1>Welcome {userData.user.displayName}</h1>
          <Link to="/search">Search</Link>
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
