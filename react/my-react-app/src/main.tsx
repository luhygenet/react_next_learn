import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import Profile2 from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Profile2 />
  </StrictMode>
);
