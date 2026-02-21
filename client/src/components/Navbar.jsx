import { useState } from "react";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Ministries", link: "/ministries" },
    { name: "Connect", link: "/connect" },
    { name: "Sermons", link: "/sermons" },
  ];

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="w-full px-8 py-1 flex items-center justify-between">
        
        {/* LEFT SIDE - Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Church Logo"
            className="h-22 w-auto object-contain"
          />
        </div>

        {/* RIGHT SIDE - Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-gray-700 font-medium hover:text-yellow-600 transition"
            >
              {item.name}
            </a>
          ))}

          <a
            href="/give"
            className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Give
          </a>

          <a
            href="/live"
            className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
          >
            Watch Live
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-8 pb-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="block text-gray-700 font-medium"
            >
              {item.name}
            </a>
          ))}

          <a
            href="/give"
            className="block bg-green-600 text-white px-4 py-2 rounded-lg text-center"
          >
            Give
          </a>

          <a
            href="/live"
            className="block bg-red-600 text-white px-4 py-2 rounded-lg text-center"
          >
            Watch Live
          </a>
        </div>
      )}
    </nav>
  );
}