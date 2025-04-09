import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-6 py-2 border-t border-gray-700 text-right text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Ochi's Portfolio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;