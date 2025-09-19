import React from "react";

export default function Footer(){
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p>© {new Date().getFullYear()} IEEE Computer Society RNSIT</p>
      </div>
    </footer>
  );
}
