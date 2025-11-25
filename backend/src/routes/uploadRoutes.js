import express from "express";
import multer from "multer";
import fs from "fs";
import { google } from "googleapis";
import { PrismaClient } from "@prisma/client";
import { authenticateToken } from "../middlewares/authenticateToken.js";

const prisma = new PrismaClient();
const router = express.Router();

// Multer local storage
const upload = multer({ dest: "uploads/" });

// Google Drive auth
const auth = new google.auth.GoogleAuth({
  keyFile: "google-drive-key.json",
  scopes: ["https://www.googleapis.com/auth/drive"],
});

// MAIN UPLOAD ROUTE
router.post("/:eventId", upload.single("photo"), async (req, res) => {
  try {
    const { eventId } = req.params;

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const drive = google.drive({
      version: "v3",
      auth: await auth.getClient(),
    });

    const filePath = req.file.path;
    const fileStream = fs.createReadStream(filePath);

    // Upload file to Shared Drive ***IMPORTANT***
    const fileResponse = await drive.files.create({
      requestBody: {
        name: `${Date.now()}-${req.file.originalname}`,
        mimeType: req.file.mimetype,
        parents: ["1hs7gxtSONGs-b-MXyPCMAJ5RT3C1ny9x"], // <-- Shared Drive folder ID
      },
      media: {
        mimeType: req.file.mimetype,
        body: fileStream,
      },
    });

    // Make file public
    await drive.permissions.create({
      fileId: fileResponse.data.id,
      requestBody: { role: "reader", type: "anyone" },
    });

    const publicUrl = `https://drive.google.com/uc?export=view&id=${fileResponse.data.id}`;

    // Save to database
    await prisma.photo.create({
      data: {
        eventId,
        imageUrl: publicUrl,
      },
    });

    // Remove local temp file
    fs.unlinkSync(filePath);

    res.json({ message: "Uploaded!", url: publicUrl });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ message: "Upload failed", error: err.message });
  }
});

// Fetch photos for event
router.get("/:id/photos", authenticateToken, async (req, res) => {
  const photos = await prisma.photo.findMany({
    where: { eventId: req.params.id },
  });
  res.json(photos);
});

export default router;
