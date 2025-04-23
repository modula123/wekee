import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";

import { register } from "./serviceWorkerRegistration.js";

register();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);

if (typeof window !== "undefined") {
  const originalConsoleLog = console.log;

  // Override console.log
  console.log = function (...args) {
    originalConsoleLog(
      "%cWekee",
      "color: #e5b300; font-size: 120px; font-weight: bolder;"
    );
    originalConsoleLog(
      "%c developed by @Iwmvictor \n Company: meyvn agency \n Client: Wekee Rwanda \n Call Meyvn: 250781996271",
      "color: #ffffff; font-size: 14px; font-weight: medium; font-family: Parkinsans; background: #0b2530; padding:6px;"
    );
    // originalConsoleLog(...args); // Call the original console.log to keep normal logging behavior
  };
}
