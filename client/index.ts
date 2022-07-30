import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

function initializeReactApp() {
  const appContainer = document.getElementById("appContainer");
  if (!appContainer) throw new Error("No #appContainer found in DOM");
  const root = createRoot(appContainer);
  root.render(React.createElement(App));
}

initializeReactApp();
