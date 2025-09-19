import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-transparent px-6 py-4 flex justify-between items-center">
      <div className="text-white font-extrabold text-xl">IEEE CS</div>
      <ul className="flex gap-6 text-gray-200">
        <li className="hover:text-white cursor-pointer">Home</li>
        <li className="hover:text-white cursor-pointer">About</li>
        <li className="hover:text-white cursor-pointer">Events</li>
        <li className="hover:text-white cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}
