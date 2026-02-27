import { useEffect, useState } from "react";

import { Clock, MapPin } from "lucide-react";
const slides = [
  {
    image: "./carousel1.jpeg",
    title: "Welcome to Our Church",
    text: "A place of faith, hope, and love."
  },
  {
    image: "./carousel2.jpeg",
    title: "Sunday Worship Service",
    text: "Join us every Sunday at 10:30 AM."
  },
  {
    image: "./carousel3.jpeg",
    title: "Youth Fellowship",
    text: "Growing together in Christ."
  }
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ================= CAROUSEL ================= */}
      <div className="relative h-[90vh] w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="flex h-full w-full items-end justify-center bg-black/50 pb-24 md:pb-32">
                <div className="text-center text-white px-4 max-w-3xl">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-6">{slide.text}</p>

                  <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold transition">
                    Join Us This Sunday
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full ${
                index === current ? "bg-yellow-500" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ================= SERVICE & LOCATION SECTION ================= */}
<section className="bg-gray-100 py-24">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 text-center">

    {/* SERVICE TIME */}
    <div className="group transition duration-300 hover:-translate-y-2">
      <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center 
                      bg-yellow-100 rounded-2xl shadow-sm group-hover:bg-yellow-400 transition">
        <Clock className="text-yellow-600 w-9 h-9 group-hover:text-black transition" />
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-wide">
        SERVICE TIME
      </h2>

      <p className="text-lg font-semibold text-gray-800">
        Sunday Mornings
      </p>

      <p className="text-gray-600 mt-2">
        10:30 AM – 1:30 PM
      </p>
    </div>

    {/* LOCATION */}
    <div className="group transition duration-300 hover:-translate-y-2">
      <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center 
                      bg-yellow-100 rounded-2xl shadow-sm group-hover:bg-yellow-400 transition">
        <MapPin className="text-yellow-600 w-9 h-9 group-hover:text-black transition" />
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-wide">
        LOCATION
      </h2>

      <h3 className="text-lg font-bold text-gray-800">
        CMB Eden Church
      </h3>

      <p className="text-gray-600 mt-2">
          Angadipeta <br />
        Devarakonda, Telangana - 508243
      </p>
    </div>

  </div>
</section>
    </>
  );
}