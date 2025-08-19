"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedBackground from "../components/AnimatedBackground";
import {
  FiUsers,
  FiAward,
  FiTrendingUp,
  FiShield,
  FiLogIn,
  FiUserPlus,
} from "react-icons/fi";

export default function Home() {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    return () => setIsAnimating(false);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0e17] text-white relative overflow-hidden">
      <AnimatedBackground />

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 flex flex-col items-center relative z-10">
        {/* Logo and Title */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isAnimating
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center mb-6 mx-auto border-2 border-blue-500/30 shadow-lg shadow-blue-900/30">
            <span className="text-white text-3xl font-bold">SA</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400">
            Shadow Arena
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The premier gaming tournament management platform for hosts and
            administrators
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 w-full max-w-4xl">
          {[
            {
              icon: <FiUsers className="text-blue-400" size={24} />,
              title: "Player Management",
              description: "Track and manage player statistics and profiles",
            },
            {
              icon: <FiAward className="text-purple-400" size={24} />,
              title: "Tournament Hosting",
              description: "Create and manage gaming tournaments with ease",
            },
            {
              icon: <FiTrendingUp className="text-green-400" size={24} />,
              title: "Live Statistics",
              description: "Real-time analytics and performance metrics",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-lg p-6 border border-blue-900/30 transition-all duration-700 delay-${
                index * 200
              } ${
                isAnimating
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="p-3 rounded-lg bg-gradient-to-r from-blue-900/30 to-indigo-900/30 inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Authentication Options */}
        <div
          className={`w-full max-w-2xl transition-all duration-700 delay-600 ${
            isAnimating
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-xl rounded-xl p-8 border border-blue-900/30">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Access Your Dashboard
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Admin Section */}
              <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-lg p-6 border border-blue-900/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-900/30 text-blue-400">
                    <FiShield size={20} />
                  </div>
                  <h3 className="text-lg font-bold">Administrators</h3>
                </div>
                <p className="text-gray-400 text-sm mb-6">
                  Full control over tournaments, players, and host accounts
                </p>
                <div className="space-y-3">
                  <Link
                    href="/login"
                    className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-lg flex items-center justify-center gap-2 text-white font-medium transition-all"
                  >
                    <FiLogIn size={18} />
                    Admin Login
                  </Link>
                  <Link
                    href="/register"
                    className="w-full py-2.5 bg-gradient-to-r from-blue-900/40 to-indigo-900/40 hover:from-blue-900/60 hover:to-indigo-900/60 rounded-lg flex items-center justify-center gap-2 text-blue-400 border border-blue-900/40 font-medium transition-all"
                  >
                    <FiUserPlus size={18} />
                    Register Admin
                  </Link>
                </div>
              </div>

              {/* Host Section */}
              <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 rounded-lg p-6 border border-purple-900/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-900/30 text-purple-400">
                    <FiAward size={20} />
                  </div>
                  <h3 className="text-lg font-bold">Tournament Hosts</h3>
                </div>
                <p className="text-gray-400 text-sm mb-6">
                  Create tournaments, manage matches, and track player
                  performance
                </p>
                <div className="space-y-3">
                  <Link
                    href="/login/hosts"
                    className="w-full py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-lg flex items-center justify-center gap-2 text-white font-medium transition-all"
                  >
                    <FiLogIn size={18} />
                    Host Login
                  </Link>
                  {/* Host registration link hidden as requested */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 border-t border-blue-900/20 backdrop-blur-md bg-black/30 relative z-10">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© 2025 Shadow Arena Admin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
