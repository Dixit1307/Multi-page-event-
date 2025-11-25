import { useState } from "react";
import { Calendar, Type } from "lucide-react";

export default function EventForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const eventTypes = [
    { label: "Wedding", icon: "💍" },
    { label: "Party", icon: "🎉" },
    { label: "Conference", icon: "🎤" },
    { label: "Birthday", icon: "🎂" },
    { label: "Other", icon: "❓" },
  ];

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (!title || !date || !type) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      // ✅ Login ke response se saved token fetch karo
      const token = localStorage.getItem("token");
      if (!token) {
        setError("You must login first!");
        setLoading(false);
        return;
      }

      const response = await fetch("http://localhost:5000/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // ✅ token send
        },
        body: JSON.stringify({ title, date, type }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to create event");
      }

      setSuccess("Event created successfully!");
      setTitle("");
      setDate("");
      setType("");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 w-[560px] bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] border"
    >
      <h2 className="text-2xl font-bold bg-gradient-to-r from-[#FFB200] to-[#FF4D67] text-transparent bg-clip-text mb-6 text-center">
        Create New Event
      </h2>

      {/* Title Input */}
      <label className="block text-sm font-medium mb-1 text-gray-600">
        What's the event title?
      </label>
      <div className="flex items-center border rounded-full px-4 mb-5 bg-gray-50">
        <Type className="w-5 h-5 text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Enter event name"
          className="w-full bg-transparent px-2 py-3 outline-none text-sm"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* Date Input */}
      <label className="block text-sm font-medium mb-1 text-gray-600">
        When does it happen?
      </label>
      <div className="flex items-center border rounded-full px-4 mb-5 bg-gray-50">
        <Calendar className="w-5 h-5 text-gray-500 mr-2" />
        <input
          type="date"
          className="w-full bg-transparent px-2 py-3 outline-none text-sm"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      {/* Event Type */}
      <label className="block text-sm font-medium mb-2 text-gray-600">
        What are you up to?
      </label>
      <div className="grid grid-cols-2 gap-3 mb-6">
        {eventTypes.map((ev) => (
          <button
            key={ev.label}
            type="button"
            onClick={() => setType(ev.label)}
            className={`flex items-center justify-center gap-2 py-3 rounded-full border text-sm transition-all ${
              type === ev.label
                ? "bg-gradient-to-r from-[#FFB200] to-[#FF4D67] text-white shadow-md"
                : "bg-gray-50 hover:bg-gray-100"
            }`}
          >
            <span className="text-lg">{ev.icon}</span>
            <span>{ev.label}</span>
          </button>
        ))}
      </div>

      {/* Error / Success */}
      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
      {success && <p className="text-green-500 mb-4 text-center">{success}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 font-semibold text-white rounded-full bg-gradient-to-r from-[#FFB200] to-[#FF4D67] hover:opacity-90 transition-all shadow-md"
      >
        {loading ? "Creating..." : "Create Event"}
      </button>
    </form>
  );
}
