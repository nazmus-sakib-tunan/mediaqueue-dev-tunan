
import Link from "next/link";

const Footer = () => {
  return (
  <footer className="relative overflow-hidden border-t border-slate-800 bg-slate-950 text-slate-300">

  {/* Background Glow */}
  <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">

    {/* ================= TOP FOOTER ================= */}
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

      {/* Brand */}
      <div className="sm:col-span-2 lg:col-span-1">

        <Link href="/" className="inline-flex items-center gap-2.5">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-bold text-white shadow-lg shadow-blue-500/20">
            MQ
          </div>

          <h2 className="text-xl font-bold tracking-tight text-white">
            Media<span className="text-blue-400">Queue</span>
          </h2>

        </Link>

        <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
          Connecting students with trusted tutors for better learning,
          better guidance, and better results.
        </p>

        {/* Social Links */}
        <div className="mt-6 flex items-center gap-3">

          <a
            href="#"
            aria-label="Facebook"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-xs font-bold text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/20"
          >
            f
          </a>

          <a
            href="#"
            aria-label="Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-xs font-bold text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 hover:text-white hover:shadow-lg hover:shadow-pink-500/20"
          >
            ig
          </a>

          <a
            href="#"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-xs font-bold text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/20"
          >
            in
          </a>

        </div>
      </div>

      {/* Platform */}
      <div>

        <h3 className="text-sm font-semibold text-white">
          Platform
        </h3>

        <ul className="mt-5 space-y-3.5">

          <li>
            <Link
              href="/tutors"
              className="text-sm text-slate-400 transition-colors hover:text-blue-400"
            >
              Find Tutors
            </Link>
          </li>

          <li>
            <Link
              href="/become-tutor"
              className="text-sm text-slate-400 transition-colors hover:text-blue-400"
            >
              Become a Tutor
            </Link>
          </li>

          <li>
            <Link
              href="/subjects"
              className="text-sm text-slate-400 transition-colors hover:text-blue-400"
            >
              Subjects
            </Link>
          </li>

          <li>
            <Link
              href="/how-it-works"
              className="text-sm text-slate-400 transition-colors hover:text-blue-400"
            >
              How It Works
            </Link>
          </li>

        </ul>

      </div>

      {/* Company */}
      <div>

        <h3 className="text-sm font-semibold text-white">
          Company
        </h3>

        <ul className="mt-5 space-y-3.5">

          <li>
            <Link
              href="/about"
              className="text-sm text-slate-400 transition-colors hover:text-blue-400"
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="text-sm text-slate-400 transition-colors hover:text-blue-400"
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              href="/privacy"
              className="text-sm text-slate-400 transition-colors hover:text-blue-400"
            >
              Privacy Policy
            </Link>
          </li>

          <li>
            <Link
              href="/terms"
              className="text-sm text-slate-400 transition-colors hover:text-blue-400"
            >
              Terms & Conditions
            </Link>
          </li>

        </ul>

      </div>

      {/* Contact */}
      <div>

        <h3 className="text-sm font-semibold text-white">
          Get in Touch
        </h3>

        <div className="mt-5 space-y-3">

          <p className="text-sm leading-6 text-slate-400">
            Have questions or need help?
            <br />
            We are always here to help.
          </p>

          <a
            href="mailto:hello@tuitionmedia.com"
            className="inline-block text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
          >
            mediaqueue@edu.bd
          </a>

          <p className="text-sm text-slate-400">
            Dhaka, Bangladesh
          </p>

        </div>

      </div>

    </div>

    {/* ================= BOTTOM FOOTER ================= */}
    <div className="mt-10 border-t border-slate-800 pt-6 sm:mt-12">

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

        <p className="text-center text-xs text-slate-500 sm:text-left">
          © {new Date().getFullYear()} MediaQueue. All rights reserved.
        </p>

        <p className="text-center text-xs font-medium text-slate-500 sm:text-right">
          Made for{" "}
          <span className="font-semibold text-blue-400">
            better learning.
          </span>
        </p>

      </div>

    </div>

  </div>
</footer>
  );
};

export default Footer;

