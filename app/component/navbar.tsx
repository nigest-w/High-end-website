"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <Link href="/" className="text-2xl font-bold text-blue-600">
              High-end Health Solutions
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center py-2">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link href="/service" className="text-gray-700 hover:text-blue-600">Service</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>

            {/* Get Training Button - Triggers Modal */}
            <button
              onClick={() => setShowModal(true)}
              className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-200"
            >
              <span className="text-sm">Get Training</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white py-2">
            <Link href="/" className="block px-4 py-2 text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="/about" className="block px-4 py-2 text-gray-700 hover:text-blue-600">About</Link>
            <Link href="/services" className="block px-4 py-2 text-gray-700 hover:text-blue-600">Services</Link>
            <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:text-blue-600">Contact</Link>
            
            {/* Mobile Get Training Button */}
            <button
              onClick={() => setShowModal(true)}
              className="block w-full text-left px-4 py-2 bg-blue-600 text-white rounded-xl mt-2 transition duration-200"
            >
              Get Training
            </button>
          </div>
        )}
      </div>

      {/* Modal Section */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg max-w-sm shadow-lg text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Service Not Available
            </h2>
            <p className="text-gray-600 mb-6">
              The online training service is not started yet. Please check back later or contact us for more information.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
