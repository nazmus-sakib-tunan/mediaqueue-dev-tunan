
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">

        {/* ================= TOP FOOTER ================= */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">
                TM
              </div>

              <h2 className="text-lg font-bold tracking-tight text-slate-900">
                Tuition<span className="text-blue-600">Media</span>
              </h2>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
              Connecting students with trusted tutors for better learning,
              better guidance, and better results.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-sm font-semibold text-slate-600 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                f
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-sm font-semibold text-slate-600 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                ig
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-sm font-semibold text-slate-600 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                in
              </a>

            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Platform
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/tutors"
                  className="text-sm text-slate-600 transition hover:text-blue-600"
                >
                  Find Tutors
                </Link>
              </li>

              <li>
                <Link
                  href="/become-tutor"
                  className="text-sm text-slate-600 transition hover:text-blue-600"
                >
                  Become a Tutor
                </Link>
              </li>

              <li>
                <Link
                  href="/subjects"
                  className="text-sm text-slate-600 transition hover:text-blue-600"
                >
                  Subjects
                </Link>
              </li>

              <li>
                <Link
                  href="/how-it-works"
                  className="text-sm text-slate-600 transition hover:text-blue-600"
                >
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Company
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-slate-600 transition hover:text-blue-600"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-sm text-slate-600 transition hover:text-blue-600"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-slate-600 transition hover:text-blue-600"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="text-sm text-slate-600 transition hover:text-blue-600"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Get in Touch
            </h3>

            <div className="mt-4 space-y-3">

              <p className="text-sm leading-6 text-slate-600">
                Have questions or need help?
                <br />
                We are here to help.
              </p>

              <a
                href="mailto:hello@tuitionmedia.com"
                className="block text-sm font-medium text-blue-600 transition hover:text-blue-700"
              >
                hello@tuitionmedia.com
              </a>

              <p className="text-sm text-slate-600">
                Dhaka, Bangladesh
              </p>

            </div>
          </div>

        </div>

        {/* ================= BOTTOM FOOTER ================= */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-center text-xs text-slate-500 sm:text-left">
            © {new Date().getFullYear()} TuitionMedia. All rights reserved.
          </p>

          <p className="text-center text-xs text-slate-500 sm:text-right">
            Made for better learning.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;

