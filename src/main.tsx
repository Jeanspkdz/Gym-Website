import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { MotionConfig } from "motion/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MotionConfig
      reducedMotion="user"
      transition={{
        duration: 1,
      }}
    >
      <App />
    </MotionConfig>
  </StrictMode>
);
