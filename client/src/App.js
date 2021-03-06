import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserContext from "./context/UserContext";
import Axios from "axios";
import Header from "./layout/Header";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./pages/Home";
import Search from "./pages/Search";
import SearchResults from "./pages/SearchResults";
import Library from "./pages/Library";
import Match from "./pages/Match";
import Profile from "./pages/Profile";

import "./style.css";

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/search" component={Search} />
              <Route path="/searchresults" component={SearchResults} />
              <Route path="/library" component={Library} />
              <Route path="/match" component={Match} />
              <Route path="/userprofile" component={Profile} />
            </Switch>
          </div>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}
