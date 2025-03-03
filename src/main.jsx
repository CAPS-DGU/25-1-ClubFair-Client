import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ReactGA from "react-ga4";
import RouteTracker from "./components/RouteTracker.jsx";

ReactGA.initialize(import.meta.env.VITE_GA_ID);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <RouteTracker />
      <App />
    </BrowserRouter>
  </StrictMode>
);
