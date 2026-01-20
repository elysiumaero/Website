import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // SPA fallback: For all other routes, pass to next middleware (Vite)
  // This middleware runs after all specific routes are checked
  app.use((_req, _res, next) => {
    // Pass control to the next middleware (Vite's SPA handler)
    next();
  });

  return app;
}
