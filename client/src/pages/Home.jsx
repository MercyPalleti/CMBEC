import { useEffect, useState } from "react";


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
    <div className="relative h-[90vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Dark Overlay */}
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

      {/* Dots Indicator */}
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
  );
}