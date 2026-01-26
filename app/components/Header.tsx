"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header
      className="w-full sticky top-0 z-[1] lux-header-padding header-bottom-divider-line"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "saturate(180%) blur(5px)",
        boxShadow: "transparent 0px 0px 0px 0px",
      }}
    >
      {/* Inner wrapper for flex layout */}
      <div className="flex justify-between items-center w-full">
        {/* Logo section - always visible like original */}
        <div>
          <Link href="/">
            <img
              src="/GENIUS.png"
              alt="GENIUS logo"
              style={{ width: 160, height: 80 }}
            />
          </Link>
        </div>

        {/* Home button */}
        <Link
          href="/"
          className="flex items-center text-white"
          style={{
            background: "linear-gradient(to right, rgb(0, 126, 132), rgb(0, 160, 160))",
            borderRadius: 8,
            padding: "0.5rem 1rem",
            fontWeight: 500,
            fontSize: "1rem",
            height: "2.5rem",
            gap: "0.5rem",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ fontSize: "1.25rem", width: "1.25rem", height: "1.25rem" }}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
          Home
        </Link>
      </div>
    </header>
  );
}
