"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-900 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">SynthHive</span>
        </Link>

        {/* Desktop Links */}
        <div className="flex items-center space-x-8">
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-gray-300">
              <span>Features</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-gray-300">
              <span>Solutions</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-gray-300">
              <span>Resources</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <Link href="/teams" className="hover:text-gray-300">
            For Teams
          </Link>

          <Link href="/developers" className="hover:text-gray-300">
            For Developers
          </Link>

          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>

          <Link 
            href="/launch"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 transition-colors"
          >
            Launch App
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 flex flex-col bg-gray-800 rounded-lg p-4 space-y-4">
          <Link href="/features" className="hover:text-gray-300">
            Features
          </Link>
          <Link href="/solutions" className="hover:text-gray-300">
            Solutions
          </Link>
          <Link href="/resources" className="hover:text-gray-300">
            Resources
          </Link>
          <Link href="/teams" className="hover:text-gray-300">
            For Teams
          </Link>
          <Link href="/developers" className="hover:text-gray-300">
            For Developers
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
          <Link 
            href="/launch"
            className="px-4 py-2 text-center rounded-full bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 transition-colors"
          >
            Launch App
          </Link>
        </div>
      )}
    </nav>
  );
}
