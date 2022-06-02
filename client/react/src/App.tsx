import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { SignInButton } from "./components/signInButton/SignInButton";
import { HomeView } from './views/home/Home.view';
import { loginRequest } from './configs/auth';
import { SilentRequest } from '@azure/msal-browser';

function App() {
  const { instance, accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  const [accessToken, setAccessToken] = useState("");

  const signInButtonMode = isAuthenticated? "LOGOUT": "LOGIN";

  const requestAccessToken = async () => {
    const request: SilentRequest = {
      ...loginRequest,
      account: accounts[0]
    };

    try {
      const response = await instance.acquireTokenSilent(request);
      setAccessToken(response.accessToken);
    } catch (error) {
      const response = await instance.acquireTokenPopup(request);
      setAccessToken(response.accessToken);
    }

  };

  useEffect(() => {

    if (isAuthenticated) {
      requestAccessToken();
    } else {
      if (accessToken) {
        setAccessToken("");
      }
    }

  }, []);

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
      <HomeView authInfoProps={{accessToken}}></HomeView>
    </div>
  );
}

export default App;
