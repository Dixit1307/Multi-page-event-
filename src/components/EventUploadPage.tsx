import React, { useState, useEffect } from "react";

export default function EventUploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isBlockedBrowser, setIsBlockedBrowser] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();

    // Detect Instagram, WhatsApp, Facebook browsers
    if (
      ua.includes("instagram") ||
      ua.includes("fb") ||
      ua.includes("facebook") ||
      ua.includes("whatsapp")
    ) {
      setIsBlockedBrowser(true);
    }
  }, []);

  const handleUpload = async () => {
    if (!file) return alert("Select a file");

    const formData = new FormData();
    formData.append("photo", file);

    const eventId = window.location.pathname.split("/")[2];

    const res = await fetch(`https://5c45d4761f9f.ngrok-free.app/api/uploads/${eventId}`, {
      method: "POST",
      body: formData,
    });

    await res.json();
    alert("Uploaded Successfully!");
  };

  return (
    <div className="p-6 text-center">

      {/* ⚠ Show message if inside Instagram / WhatsApp browser */}
      {isBlockedBrowser && (
        <div className="bg-yellow-200 text-black p-5 rounded-lg mb-6">
          <b>⚠ File Upload Not Supported Here</b>
          <p className="mt-2">
            You're opening this link inside Instagram / WhatsApp / Facebook.
            These apps block the upload button.
          </p>

          <p className="mt-2 font-semibold">
            Please open this page in Chrome or Safari to upload photos.
          </p>

          <button
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => window.location.assign(window.location.href)}
          >
            Open in Chrome / Safari
          </button>
        </div>
      )}

      {/* If blocked → hide uploader */}
      {!isBlockedBrowser && (
        <>
          <h2 className="text-xl mb-4 font-bold">Upload Photos</h2>

          <input
            type="file"
            className="border p-2"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />

          <button
            onClick={handleUpload}
            className="p-6 bg-red-200 min-h-screen"
          >
            Upload
          </button>
        </>
      )}
    </div>
  );
}
