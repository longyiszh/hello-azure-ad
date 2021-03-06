import { Configuration, PopupRequest, RedirectRequest } from "@azure/msal-browser";

export const msalConfig: Configuration = {
  auth: {
    clientId: process.env.REACT_APP_AUTH_CLIENT_ID || "MISSING CLIENT ID",
    authority: process.env.REACT_APP_AUTH_AUTHORITY,
    redirectUri: process.env.REACT_APP_AUTH_REDIRECT_URI,
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest: PopupRequest | RedirectRequest = {
  scopes: (process.env.REACT_APP_AUTH_SCOPES || "").split(",")
};
