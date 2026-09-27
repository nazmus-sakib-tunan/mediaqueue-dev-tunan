
"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";

const Navbar = () => {

  const {
    data: session,

  } = authClient.useSession()

  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  }

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
            href="/Tutors"
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

        {user ? (
          <div className="flex items-center gap-3">

            {/* Profile */}
            <li className="list-none">
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-2 py-1.5 shadow-sm transition-all duration-200 hover:border-blue-200 hover:shadow-md">

                <Avatar className="h-9 w-9 ring-2 ring-blue-50">
                  <Avatar.Image
                    alt="John Doe"
                    src={user?.image}
                  />

                  <Avatar.Fallback className="bg-gradient-to-br from-blue-500 to-indigo-600 font-semibold text-white">
                    {user.name.charAt(0)}
                  </Avatar.Fallback>
                </Avatar>

                <div className="hidden pr-2 sm:block">
                  <p className="max-w-28 truncate text-sm font-semibold text-slate-800">
                    {user.name}
                  </p>

                  <p className="text-xs text-slate-400">
                    Account
                  </p>
                </div>
              </div>
            </li>

            {/* Logout */}
            <li className="list-none">
              <Button
                variant="danger"
                className="rounded-xl border border-red-100 bg-red-50 px-4 text-sm font-medium text-red-600 transition-all duration-200 hover:border-red-200 hover:bg-red-100 hover:shadow-sm"
                onClick={handleSignOut}>
                Log out
              </Button>
            </li>

          </div>
        ) : (
          <>
            <div className="flex items-center gap-3">

              <Link
                href="/signup"
                className="hidden rounded-xl px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 sm:block"
              >
                Sign Up
              </Link>

              <Link
                href="/login"
                className="rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:from-blue-600 hover:to-indigo-600 hover:shadow-md"
              >
                Login
              </Link>

            </div>
          </>
        )}


      </div>
    </nav>
  );
};

export default Navbar;

