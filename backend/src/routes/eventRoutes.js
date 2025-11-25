// backend/src/routes/eventRoutes.js
import express from "express";
import { PrismaClient } from "@prisma/client";
import QRCode from "qrcode";
import { authenticateToken } from "../middlewares/authenticateToken.js";

const prisma = new PrismaClient();
const router = express.Router();

// ✅ Create Event (Protected Route)
router.post("/", authenticateToken, async (req, res) => {
  const { title, date, type } = req.body;

  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized. No user found in token." });
  }

  if (!title || !date || !type) {
    return res.status(400).json({ message: "Please provide title, date, and type" });
  }

  try {
    const event = await prisma.event.create({
      data: {
        title,
        date: new Date(date),
        type,
        userId: req.user.id,
      },
    });

    res.status(201).json(event);
  } catch (err) {
    console.error("Event creation error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// ✅ Get all events for the logged-in user
router.get("/", authenticateToken, async (req, res) => {
  try {
    const events = await prisma.event.findMany({
      where: { userId: req.user.id },
    });
    res.json(events);
  } catch (err) {
    console.error("Fetch events error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// ✅ Generate QR code for an event (ID as string)
router.get("/:id/qrcode", authenticateToken, async (req, res) => {
  const { id } = req.params;

  try {
    const event = await prisma.event.findUnique({
      where: { id: id },
    });

    if (!event || event.userId !== req.user.id) {
      return res.status(403).json({ message: "Access denied for this event" });
    }

    const eventUrl = `https://5c45d4761f9f.ngrok-free.app/event/${id}`; // frontend can handle string ID
    const qrCodeDataUrl = await QRCode.toDataURL(eventUrl);

    res.json({ qrCode: qrCodeDataUrl });
  } catch (err) {
    console.error("QR code generation error:", err);
    res.status(500).json({ message: "Failed to generate QR code" });
  }
});

export default router;
