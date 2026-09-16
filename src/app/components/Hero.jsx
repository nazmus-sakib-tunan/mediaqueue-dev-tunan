
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 md:grid-cols-2 md:gap-8 lg:px-8 lg:py-20 xl:gap-16">

        {/* ================= LEFT CONTENT ================= */}
        <div className="max-w-2xl">

          {/* Badge */}
          <span className="mb-5 inline-block rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-600 sm:text-sm">
            Learn Better. Grow Faster.
          </span>

          {/* Heading */}
          <h1 className="text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
            Find the Right
            <span className="text-blue-600"> Tutor </span>
            for Your Learning Journey
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-xl text-sm leading-6 text-slate-600 sm:mt-6 sm:text-base sm:leading-7 lg:text-lg">
            Connect with trusted and experienced tutors who can help you
            achieve your academic goals with personalized learning.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3 xs:flex-row sm:mt-8 sm:flex-row sm:gap-4">

            <Link
              href="/Tutors"
              className="rounded-lg bg-slate-900 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Find a Tutor
            </Link>

            <Link
              href="/becomeTutors"
              className="rounded-lg border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              Become a Tutor
            </Link>

          </div>

          {/* Stats */}
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-5 border-t border-slate-200 pt-6 sm:mt-10 sm:gap-x-10">

            <div>
              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                500+
              </h3>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                Expert Tutors
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                2K+
              </h3>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                Students
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                50+
              </h3>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                Subjects
              </p>
            </div>

          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative flex justify-center md:justify-end">

          {/* Image Container */}
          <div className="relative flex w-full max-w-md items-center justify-center sm:max-w-lg lg:max-w-xl">

            <Image
              src="/images/teacher.png"
              alt="Tutor helping a student"
              width={800}
              height={750}
              priority
              className="
                h-auto
                w-full
                max-h-[420px]
                object-contain
                sm:max-h-[500px]
                md:max-h-[550px]
                lg:max-h-[620px]
                xl:max-h-[680px]
              "
            />

          </div>

          {/* ================= FLOATING CARD ================= */}
          <div className="absolute bottom-2 left-0 rounded-2xl border border-slate-100 bg-white p-3 shadow-lg sm:bottom-4 sm:left-2 sm:p-4 md:-left-3 lg:bottom-8">

            <div className="flex items-center gap-2.5 sm:gap-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-600 sm:h-10 sm:w-10">
                ✓
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-900 sm:text-sm">
                  Trusted Tutors
                </p>

                <p className="mt-0.5 text-[10px] text-slate-500 sm:text-xs">
                  Learn with confidence
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

