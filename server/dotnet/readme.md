# Hello Azure AD - Dotnet Server

Dotnet-powered demo server with Azure Active Directive authentication implemented.

A WebAPI-type app has been created, with the following endpoints.

- GET `/api`
- GET `/api/user`
- POST `/api/user/add` (Under access control)

To test this demo out, you need to first follow the steps for configuring Azure AD, this app, and [Insomnia client][insomniaClient].

## Configuration on Azure portal

- Create a new tenant. (e.g. `Hello Azure AD`)

- Under `App registrations`, create a new app (e.g. `Dotnet Server`)
  - Supported account types: `Accounts in this organizational directory only (Hello Azure AD only - Single tenant)`

- Go to your new App, under `App roles`, create a new Role (e.g. `Admin`)
  - Allowed member types: `Users/Groups`

- Go back to your tenant `Hello Azure AD`, under `Enterprise applications`, find your new app in the list, and enter.

- Under `Users and groups`, click `Add user/group`, select your user, and assign your new role `Admin`.

- Go back to your new App (Main menu -> AzureAD -> App registrations)

- Under `Authentication`
  - Add a new `Web` platform
  - Redirect URI: `https://localhost:7104/api`

- Under `Certificates & secrets`
  - Create a new client secret
  - make sure you write it down as it will disappear once navigated away.

- Under `Expose an API`
  - Generate a new `Application ID URI`. You can leave the string as default.
  - Create a new scope
    - with any name you like
    - `Who can consent?` answer `Admins and users`
    - Fill out other values as you like.

## Configuration for this server

- Create a new user secret for the project.
  - Visual Studio: right click `HelloAzureAD.App` and select `Manage User Secrets`
  - Dotnet CLI: go to `HelloAzureAD.App` directory and [follow dotnet CLI documentation][dotnetUserSecrets]

- User secret format:
``` jsonc
{
  "AzureAd": {
    "Instance": "https://login.microsoftonline.com",
    "TenantId": "[YOUR TENANT ID]",
    "ClientId": "[YOUR CLIENT ID]"
  }
}
```

- Replace `TenantId` and `ClientId` with your own. You can find them on your App overview page:
  - `Hello Azure AD -> Dotnet Server -> Overview`

## Configuration for Insomnia client

- Import `docs/insomnia-hello-azure-ad-dotnet.json` into your Insomnia client

- Switch to `dev` environment

- Go to `Ready state` request, select the "OAuth 2" authentication tab, then fill out the information.

- The endpoint URLs can be found in your app page: `Hello Azure AD -> Dotnet Server -> Overview -> Endpoints`
  - Enabled: ✔
  - Grant Type: `Authorization Code`
  - Authorization URL: Fill it with "OAuth 2.0 authorization endpoint (v2)"
  - Access Token URL: Fill it with "OAuth 2.0 token endpoint (v2)"
  - Client ID: Fill it with "Application (client) ID" on your App page: `Hello Azure AD -> Dotnet Server -> Overview`
  - Client Secret: Your newly generated client secret value in "Configuration on Azure portal" step.
    - If you forget it, just regenerate.
  - Redirect URL: Anything will work, but recommending `https://localhost:7104/api`

- Expand "Advanced Options"
  - Scope: Your new scope URL.

- Leave the rest fields as default.

- Click "Fetch Tokens" at the bottom. You are prompted with a standard Microsoft login page. Log in with your Microsoft email and password.

- If login is successful, Insomnia will catch a new Access Token for you. Save this access token in the environment variable `OAUTH_TOKEN`.

## Test it out

Build this server and launch it.

From Insomnia client:

- Test `Ready State`, `Get Users`, `Add Users` requests. They should all work.

- Test `Add Users - no token` request. You should get the error `401 Unauthorized`.

# Refs

https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-add-app-roles-in-azure-ad-apps#assign-users-and-groups-to-roles

https://dev.to/425show/calling-an-azure-ad-secured-api-with-postman-22co

<!-- Links -->
[insomniaClient]: https://insomnia.rest/
[dotnetUserSecrets]:[https://docs.microsoft.com/en-us/aspnet/core/security/app-secrets?view=aspnetcore-6.0&tabs=windows#enable-secret-storage]
