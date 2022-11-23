import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import { AppContextProvider } from "./AppContext/AppContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
