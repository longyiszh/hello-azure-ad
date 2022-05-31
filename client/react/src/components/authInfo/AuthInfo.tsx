import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";

export const AuthInfo = () => {
  return (
    <section className="AuthInfo">
      <h2 className="sectionTitle">Authentication Info</h2>
      <UnauthenticatedTemplate>
        Your information will be shown here after your successful log-in.
      </UnauthenticatedTemplate>
    </section>
  );
};