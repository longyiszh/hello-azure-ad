import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./components/signInButton/SignInButton";
import { HomeView } from './views/home/Home.view';

function App() {
  const isAuthenticated = useIsAuthenticated();
  const signInButtonMode = isAuthenticated? "LOGOUT": "LOGIN";

  return (
    <div className="App">
      <nav className="appNav">
        <header>
          <picture><img src={logo} className="App-logo" alt="logo" /></picture>
          <a href="/">Hello Azure AD - React</a>
        </header>
        <div className="spacer"></div>
        <footer>
          <SignInButton mode={signInButtonMode} />
        </footer>
      </nav>
      <HomeView></HomeView>
    </div>
  );
}

export default App;
