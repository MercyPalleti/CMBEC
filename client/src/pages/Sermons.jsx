import React from "react";
import { FaYoutube } from "react-icons/fa";

const sermons = [
  {
    id: 1,
    title: "Walking in Faith",
    description:
      "A powerful message about trusting God during uncertain seasons.",
    thumbnail: "/sermon1.jpeg",
    link: "https://www.youtube.com/live/CgFbdo2qf1E?si=T8o90J3UkjHEkcdd",
  },
  {
    id: 2,
    title: "Power of Prayer",
    description:
      "Understanding how prayer transforms situations and hearts.",
    thumbnail: "/sermon2.jpeg",
    link: "https://www.youtube.com/live/CgFbdo2qf1E?si=T8o90J3UkjHEkcdd",
  },
  {
    id: 3,
    title: "Walking in Faith",
    description:
      "A powerful message about trusting God during uncertain seasons.",
    thumbnail: "/sermon1.jpeg",
    link: "https://www.youtube.com/live/CgFbdo2qf1E?si=T8o90J3UkjHEkcdd",
  },
  {
    id: 4,
    title: "Power of Prayer",
    description:
      "Understanding how prayer transforms situations and hearts.",
    thumbnail: "/sermon2.jpeg",
    link: "https://www.youtube.com/live/CgFbdo2qf1E?si=T8o90J3UkjHEkcdd",
  },
  {
    id: 5,
    title: "Walking in Faith",
    description:
      "A powerful message about trusting God during uncertain seasons.",
    thumbnail: "/sermon1.jpeg",
    link: "https://www.youtube.com/live/CgFbdo2qf1E?si=T8o90J3UkjHEkcdd",
  },
  {
    id: 6,
    title: "Power of Prayer",
    description:
      "Understanding how prayer transforms situations and hearts.",
    thumbnail: "/sermon2.jpeg",
    link: "https://www.youtube.com/live/CgFbdo2qf1E?si=T8o90J3UkjHEkcdd",
  },
  {
    id: 7,
    title: "Walking in Faith",
    description:
      "A powerful message about trusting God during uncertain seasons.",
    thumbnail: "/sermon1.jpeg",
    link: "https://www.youtube.com/live/CgFbdo2qf1E?si=T8o90J3UkjHEkcdd",
  },
  {
    id: 8,
    title: "Power of Prayer",
    description:
      "Understanding how prayer transforms situations and hearts.",
    thumbnail: "/sermon2.jpeg",
    link: "https://www.youtube.com/live/CgFbdo2qf1E?si=T8o90J3UkjHEkcdd",
  },
  {
    id: 9,
    title: "Walking in Faith",
    description:
      "A powerful message about trusting God during uncertain seasons.",
    thumbnail: "/sermon1.jpeg",
    link: "https://www.youtube.com/live/CgFbdo2qf1E?si=T8o90J3UkjHEkcdd",
  },
  {
    id: 10,
    title: "Power of Prayer",
    description:
      "Understanding how prayer transforms situations and hearts.",
    thumbnail: "/sermon2.jpeg",
    link: "https://www.youtube.com/live/CgFbdo2qf1E?si=T8o90J3UkjHEkcdd",
  },
  {
    id: 11,
    title: "Walking in Faith",
    description:
      "A powerful message about trusting God during uncertain seasons.",
    thumbnail: "/sermon1.jpeg",
    link: "https://www.youtube.com/live/CgFbdo2qf1E?si=T8o90J3UkjHEkcdd",
  },
  {
    id: 12,
    title: "Power of Prayer",
    description:
      "Understanding how prayer transforms situations and hearts.",
    thumbnail: "/sermon2.jpeg",
    link: "https://www.youtube.com/live/CgFbdo2qf1E?si=T8o90J3UkjHEkcdd",
  },
];

const Sermons = () => {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-16 py-12">
      
      {/* Hero Section */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
          Sermons
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Be inspired and strengthened by our latest messages. Watch and grow in faith.
        </p>
      </div>

      {/* Sermon Grid */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {sermons.map((sermon) => (
          <div
            key={sermon.id}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >
            <img
              src={sermon.thumbnail}
              alt={sermon.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h2 className="text-xl font-semibold text-yellow-400">
                {sermon.title}
              </h2>

              <p className="text-gray-400 mt-3 text-sm">
                {sermon.description}
              </p>

              <a
                href={sermon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-300 transition"
              >
                <FaYoutube className="text-red-600" />
                Watch on YouTube
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sermons;