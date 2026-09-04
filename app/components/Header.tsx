"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#110720]/90 backdrop-blur-sm">
      <nav className="px-4 sm:px-6 py-2">
        <div className="container mx-auto max-w-6xl flex items-center justify-between h-full">

          {/* ================= LOGO ================= */}
          <Link
            href="/"
            className="text-2xl font-bold text-white hover:text-purple-400 transition-colors lg:-ml-16"
          >
            <Image
              src="/logo/signature.png"
              alt="Ali signature"
              width={140}
              height={70}
              priority
            />
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <ul className="hidden lg:flex items-center gap-4 md:gap-8 list-none m-0 p-0">

            <li className="m-0 p-0">
              <Link
                href="#about"
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
                About
              </Link>
            </li>

            <li className="m-0 p-0">
              <Link
                href="#experience"
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
                Experience
              </Link>
            </li>

            <li className="m-0 p-0">
              <Link
                href="#technical-focus"
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
                Technical Focus
              </Link>
            </li>

            <li className="m-0 p-0">
              <Link
                href="#lab"
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
                Projects
              </Link>
            </li>

            <li className="m-0 p-0">
              <Link
                href="#contact"
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
                Contact
              </Link>
            </li>

            <li className="m-0 p-0">
              <a
                href="/cv/Ali-Mohamed-Cv.pdf"
                download
                className="px-3 py-2 md:px-4 rounded-lg bg-purple-600/20 border border-purple-500/50 text-white hover:bg-purple-600/40 hover:border-purple-400 transition-all duration-200 text-xs md:text-sm font-medium whitespace-nowrap"
              >
                Download CV
              </a>
            </li>
          </ul>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-white/20 text-white hover:border-purple-400 hover:text-purple-400 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {isOpen && (
          <div className="lg:hidden mt-2 pb-3">
            <div className="rounded-2xl border border-white/10 bg-[#110720]/95 backdrop-blur-md p-4 shadow-xl">

              <div className="flex flex-col gap-3">

                <Link
                  href="#about"
                  onClick={closeMenu}
                  className="text-white hover:text-purple-400 transition-colors text-base py-2"
                >
                  About
                </Link>

                <Link
                  href="#experience"
                  onClick={closeMenu}
                  className="text-white hover:text-purple-400 transition-colors text-base py-2"
                >
                  Experience
                </Link>

                <Link
                  href="#technical-focus"
                  onClick={closeMenu}
                  className="text-white hover:text-purple-400 transition-colors text-base py-2"
                >
                  Technical Focus
                </Link>

                <Link
                  href="#lab"
                  onClick={closeMenu}
                  className="text-white hover:text-purple-400 transition-colors text-base py-2"
                >
                  Projects
                </Link>

                <Link
                  href="#contact"
                  onClick={closeMenu}
                  className="text-white hover:text-purple-400 transition-colors text-base py-2"
                >
                  Contact
                </Link>

                <a
                  href="/cv/Ali-Mohamed-Cv.pdf"
                  download
                  onClick={closeMenu}
                  className="mt-1 text-center px-4 py-2 rounded-lg bg-purple-600/20 border border-purple-500/50 text-white hover:bg-purple-600/40 hover:border-purple-400 transition-all duration-200 text-sm font-medium"
                >
                  Download CV
                </a>

              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}