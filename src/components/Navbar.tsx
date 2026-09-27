"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { name: "Games", href: "GAMES" },
  { name: "NEWSWIRE", href: "NEWSWIRE" },
  { name: "VIDEOS", href: "VIDEOS" },
  { name: "DOWNLOADS", href: "#" },
  { name: "Store", href: "#" },
  { name: "SUPPORT", href: "#" },
];

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShow(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed left-0 w-full z-50 transition-all duration-300 ${
        searchOpen ? "top-0" : "top-0 md:top-4"
      } ${
        show ? "translate-y-0" : "-translate-y-full"
      } ${
        searchOpen
          ? "bg-white/[0.08] backdrop-blur-2xl backdrop-saturate-150 border-b border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-1xl mx-auto flex items-center lg:text-ellipsis md:text-xs justify-between px-6 md:px-12 h-11">
        {/* لوگو سمت چپ */}
        <div className="flex items-center justify-start flex-1">
          <a href="home" className="flex items-center">
            <Image
              src="/gallery/logo2.png"
              alt="Logo"
              width={25}
              height={50}
              className="object-contain"
            />
          </a>
        </div>

        {/* لینک های دسکتاپ وسط */}
        <ul className="hidden md:flex flex-1 justify-center space-x-7 font-normal text-white uppercase tracking-wide text-center">
          {navLinks.map((link, i) => (
            <li
              key={i}
              className="relative group hover:text-white transition"
            >
              <a href={link.href}>{link.name}</a>

              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full shadow-sm"></span>
            </li>
          ))}
        </ul>

        {/* گزینه های سمت راست دسکتاپ */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-2">
          {/* Get Launcher */}
          <a
            href="#"
            className="rounded-full border border-white/70 px-4 py-2 text-xs font-bold text-white transition hover:bg-white hover:text-black"
          >
            Get Launcher
          </a>

          {/* Search */}
          <button
            aria-label="Search"
            onClick={() => {
              setSearchOpen(!searchOpen);
              setProfileOpen(false);
            }}
            className="flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-white/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
          </button>

          {/* Profile */}
          <div className="relative">
            <button
              aria-label="Profile"
              onClick={() => {
                setProfileOpen(!profileOpen);
                setSearchOpen(false);
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-white/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M5 21c0-3.5 3.1-6 7-6s7 2.5 7 6" />
              </svg>
            </button>

            {/* Account Dropdown */}
            {profileOpen && (
              <div className="absolute right-0 top-12 w-44 overflow-hidden rounded-xl border border-white/10 bg-black/80 shadow-2xl backdrop-blur-xl">
                <button className="w-full px-5 py-3 text-left text-sm font-bold text-white transition hover:bg-white hover:text-black">
                  Sign In
                </button>

                <button className="w-full px-5 py-3 text-left text-sm font-bold text-white transition hover:bg-white hover:text-black">
                  Sign Up
                </button>

                <button className="w-full px-5 py-3 text-left text-sm font-bold text-white transition hover:bg-white hover:text-black">
                  Help
                </button>
              </div>
            )}
          </div>
        </div>

        {/* دکمه موبایل */}
        <button
          className="md:hidden text-white text-1xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Search Navbar */}
      {searchOpen && (
        <div className="hidden md:block w-full bg-white/[0.06] backdrop-blur-2xl backdrop-saturate-150 border-b border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
          <div className="mx-auto max-w-1xl px-6 py-4 md:px-12">
            <div className="flex items-center gap-5">
              {/* Search Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 text-white"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>

              {/* Search Input */}
              <input
                type="text"
                autoFocus
                placeholder="Search Rockstar Games..."
                className="min-w-0 flex-1 bg-transparent text-base font-semibold text-white outline-none placeholder:text-white/40"
              />

              {/* Search Options */}
              <div className="flex shrink-0 items-center gap-2">
                <button className="rounded-full border border-white/20 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white backdrop-blur-md transition hover:bg-white hover:text-black">
                  Games
                </button>

                <button className="rounded-full border border-white/20 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white backdrop-blur-md transition hover:bg-white hover:text-black">
                  Newswire
                </button>

                <button className="rounded-full border border-white/20 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white backdrop-blur-md transition hover:bg-white hover:text-black">
                  Videos
                </button>

                <button className="rounded-full border border-white/20 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white backdrop-blur-md transition hover:bg-white hover:text-black">
                  Store
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* منوی موبایل وسط‌چین */}
      {menuOpen && (
        <ul className="md:hidden bg-black/10 backdrop-blur-sm shadow-2xl flex flex-col items-center space-y-6 py-4 px-2 font-semibold text-white uppercase tracking-wide text-center">
          {navLinks.map((link, i) => (
            <li key={i} className="hover:text-white transition">
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}