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

  // Newsletter subscription endpoint
  app.post("/api/newsletter", (_req, res) => {
    const { email } = _req.body;

    // Basic email validation
    if (!email || !email.includes("@")) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    // In a production environment, you would:
    // 1. Validate the email format more thoroughly
    // 2. Store the email in a database
    // 3. Send a confirmation email
    // 4. Integrate with a newsletter service (Mailchimp, SendGrid, etc.)

    // For now, we'll just return success
    console.log(`Newsletter signup: ${email}`);

    res.status(200).json({
      success: true,
      message: "Successfully subscribed to newsletter",
      email,
    });
  });

  return app;
}
