

const AboutPage = () => {
  return (
    <div>
    

<section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-16 sm:py-20 lg:py-24">

  {/* Background Decorations */}
  <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-violet-300/30 blur-3xl" />
  <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />
  <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 rounded-full bg-indigo-300/20 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

    {/* ================= HEADER ================= */}
    <div className="mx-auto max-w-3xl text-center">

      <span className="inline-flex items-center rounded-full border border-indigo-200 bg-white/80 px-4 py-1.5 text-xs font-bold text-indigo-600 shadow-sm backdrop-blur">
        ✦ About TuitionMedia
      </span>

      <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        Connecting students with
        <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
          {" "}the right tutors.
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
        TuitionMedia makes it easier for students to discover qualified
        tutors and find the right guidance for their academic journey.
      </p>

    </div>

    {/* ================= MAIN ================= */}
    <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

      {/* LEFT */}
      <div>

        <div className="mb-6">
          <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">
            Our Mission
          </span>

          <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Better guidance.
            <br />
            <span className="text-violet-600">
              Better learning.
            </span>
          </h3>
        </div>

        <p className="text-sm leading-7 text-slate-600 sm:text-base">
          Finding the right tutor should be simple. TuitionMedia brings
          students and tutors together through an easy-to-use platform
          where learners can explore tutors based on their academic
          background, location, and expertise.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
          Our goal is to make quality tutoring more accessible while
          giving tutors a better way to connect with students.
        </p>

        {/* Features */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">

          {/* Feature 1 */}
          <div className="group rounded-2xl border border-indigo-100 bg-white/80 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-lg text-white shadow-lg shadow-indigo-200">
              ✓
            </div>

            <h4 className="mt-4 font-bold text-slate-900">
              Trusted Tutors
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Explore tutors with clear academic backgrounds.
            </p>

          </div>

          {/* Feature 2 */}
          <div className="group rounded-2xl border border-cyan-100 bg-white/80 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-100">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-lg text-white shadow-lg shadow-cyan-200">
              ⚡
            </div>

            <h4 className="mt-4 font-bold text-slate-900">
              Easy to Find
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Discover suitable tutors quickly and easily.
            </p>

          </div>

        </div>

      </div>

      {/* RIGHT CARD */}
      <div className="relative">

        {/* Gradient Outer Card */}
        <div className="rounded-[2rem] bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500 p-[1px] shadow-2xl shadow-indigo-200/50">

          <div className="rounded-[2rem] bg-white/95 p-6 sm:p-8">

            {/* Header */}
            <div className="flex items-center justify-between">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-lg font-extrabold text-white shadow-lg shadow-indigo-200">
                TM
              </div>

              <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-600">
                ● Growing
              </span>

            </div>

            <h3 className="mt-6 text-2xl font-extrabold text-slate-900">
              Built for better learning.
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              We connect students with capable tutors and help tutors
              reach students who need their guidance.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-3">

              <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 p-4 text-center">
                <p className="text-2xl font-extrabold text-indigo-600">
                  100+
                </p>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  Tutors
                </p>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-violet-50 to-fuchsia-50 p-4 text-center">
                <p className="text-2xl font-extrabold text-violet-600">
                  20+
                </p>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  Subjects
                </p>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 p-4 text-center">
                <p className="text-2xl font-extrabold text-cyan-600">
                  10+
                </p>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  Locations
                </p>
              </div>

            </div>

            {/* Bottom Highlight */}
            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50 to-cyan-50 p-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-indigo-600 shadow-sm">
                ✦
              </div>

              <div>
                <p className="text-sm font-bold text-slate-800">
                  Learning starts with the right guidance.
                </p>

                <p className="mt-0.5 text-xs text-slate-500">
                  Find. Connect. Learn.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Floating Badge */}
        <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-white bg-white px-5 py-4 shadow-xl shadow-indigo-200/50 sm:block lg:-left-8">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-md">
              ✓
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900">
                Simple & Reliable
              </p>

              <p className="text-xs text-slate-500">
                Made for students
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>




    </div>
  );
};

export default AboutPage;