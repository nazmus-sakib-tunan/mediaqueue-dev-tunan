
"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">
            MQ
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight text-slate-900">
              Media<span className="text-blue-600">Queue</span>
            </h1>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/tutors"
            className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
          >
            Tutors
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
          >
            About
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/signin"
            className="hidden text-sm font-medium text-slate-700 transition hover:text-blue-600 sm:block"
          >
            Sign In
          </Link>

          <Link
            href="/login"
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            Login
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

