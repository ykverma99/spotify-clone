import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import { UserProvider } from "./Context/UserContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Auth0Provider
        domain="dev-6mhgsugoalkijgk7.us.auth0.com"
        clientId="fM8Fpatg9lXhcLPS3NSTEOPb6mBv0RTB"
        // redirectUri={window.location.origin}
        authorizationParams={window.location.origin}
      >
        <UserProvider>
          <App />
        </UserProvider>
      </Auth0Provider>
    </QueryClientProvider>
  </React.StrictMode>,
);
