import React, { useState, useEffect } from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { app } from "../firebaseConfig";

function Gallery({ folder = "gallery" }) {
  const [media, setMedia] = useState([]);

  const words = [
    "Mother",
    "🖤",
    "Aunt",
    "🖤",
    "Cousin",
    "🖤",
    "Friend",
    "🖤",
    "Sister",
    "🖤",
  ];

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  useEffect(() => {
    const fetchMedia = async () => {
      const storage = getStorage(app);
      const listRef = ref(storage, folder);
      const res = await listAll(listRef);

      const urls = await Promise.all(
        res.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          const ext = itemRef.name.split(".").pop().toLowerCase();
          return { src: url, type: ext === "mp4" ? "video" : "image" };
        })
      );

      setMedia(shuffleArray(urls));
    };

    fetchMedia();
  }, [folder]);

  if (media.length === 0)
    return <p className="text-center py-10 text-purple-600">Loading...</p>;

  return (
    <section className="w-full py-12 overflow-hidden relative">
      <style>
        {`
          @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
          @keyframes marquee-reverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0%); } }
          .animate-marquee { animation: marquee 60s linear infinite; }
          .animate-marquee-reverse { animation: marquee-reverse 60s linear infinite; }
        `}
      </style>

      <div className="overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
          {[...words, ...words].map((word, i) => (
            <span
              key={i}
              className="mx-6 text-2xl sm:text-4xl font-semibold text-purple-600 inline-block"
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 mb-8 overflow-hidden whitespace-nowrap flex justify-center">
        <div className="inline-block animate-marquee">
          {[...media, ...media].map((item, i) =>
            item.type === "image" ? (
              <img
                key={i}
                src={item.src}
                alt={`media-${i}`}
                className="inline-block mx-4 h-[50vh] sm:h-64 w-36 sm:w-48 object-cover rounded-2xl shadow-md"
              />
            ) : (
              <video
                key={i}
                src={item.src}
                className="inline-block mx-4 h-[50vh] sm:h-64 w-36 sm:w-48 object-cover rounded-2xl shadow-md"
                muted
                playsInline
                autoPlay
                loop
              />
            )
          )}
        </div>
      </div>

      <div className="overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee-reverse">
          {[...words, ...words].map((word, i) => (
            <span
              key={i}
              className="mx-6 text-2xl sm:text-4xl font-semibold text-purple-600 inline-block"
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
