import React, { useEffect, useState } from "react";

type Photo = {
  imageUrl: string;
  // add other properties if needed
};

type EventPhotosPageProps = {
  eventId: string;
};

export default function EventPhotosPage({ eventId }: EventPhotosPageProps) {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/events/${eventId}/photos`)
      .then(res => res.json())
      .then(data => setPhotos(data));
  }, [eventId]);

  return (
    <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      {photos.map((p, idx) => (
        <img key={idx} src={p.imageUrl} className="rounded shadow" />
      ))}
    </div>
  );
}