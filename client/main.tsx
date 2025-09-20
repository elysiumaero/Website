import "./global.css";
import { createRoot, Root } from "react-dom/client";
import App from "./App";

declare global {
  interface Window {
    __APP_ROOT?: Root;
  }
}

const container = document.getElementById("root")!;
const root = window.__APP_ROOT ?? createRoot(container);
if (!window.__APP_ROOT) window.__APP_ROOT = root;
root.render(<App />);

if (import.meta.hot) {
  import.meta.hot.accept((mod) => {
    // Re-render on HMR with the existing root
    root.render(<App />);
  });
}
