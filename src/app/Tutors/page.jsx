import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";


const FindTutor = async () => {
  const res = await fetch('http://localhost:5000/becomeTutors');
  const tutors = await res.json();
  console.log(tutors)

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // Not logged in → Sign In page
  if (!session?.user) {
    redirect("/signup");
  }




  return (
    <section className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600">
            Find Your Tutor
          </span>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Find the Right Tutor for You
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Explore experienced tutors and find the perfect match for your
            learning journey.
          </p>
        </div>

        {/* Tutor Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {tutors?.map((tutor) => (
            <div
              key={tutor._id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"
            >
              {/* Card Top */}
              <div className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6">

                {/* Profile */}
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white shadow-md shadow-blue-200">
                    {tutor.name?.charAt(0).toUpperCase()}
                  </div>

                  <div className="min-w-0">
                    <h2 className="truncate text-lg font-bold text-slate-900">
                      {tutor.name}
                    </h2>

                    <p className="text-sm capitalize text-slate-500">
                      {tutor.department} • {tutor.universityName}
                    </p>
                  </div>
                </div>

                {/* Gender / Location */}
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-medium capitalize text-slate-600 ring-1 ring-slate-200">
                    {tutor.gender}
                  </span>

                  <span className="rounded-full bg-white px-3 py-1 text-xs font-medium capitalize text-slate-600 ring-1 ring-slate-200">
                    📍 {tutor.location}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">

                {/* Education */}
                <div className="space-y-4">

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Education
                    </p>

                    <p className="mt-1 text-sm font-medium text-slate-700">
                      {tutor.universityName}
                    </p>

                    <p className="text-sm capitalize text-slate-500">
                      {tutor.department} · {tutor.academicYear}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      School
                    </p>

                    <p className="mt-1 text-sm font-medium text-slate-700">
                      {tutor.schoolName}
                    </p>

                    <p className="text-sm capitalize text-slate-500">
                      {tutor.schoolMedium} · {tutor.schoolGroup}
                    </p>
                  </div>

                </div>

                {/* Divider */}
                <div className="my-5 border-t border-slate-100" />

                {/* Contact */}
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs text-slate-400">
                      WhatsApp
                    </p>

                    <p className="mt-1 text-sm font-medium text-slate-700">
                      {tutor.whatsapp}
                    </p>
                  </div>

                  <Link href={`/Tutors/${tutor._id}`}>

                    <button
                      className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
                    >
                      View Profile
                    </button>
                  </Link>
                </div>

              </div>
            </div>
          ))}

        </div>



      </div>
    </section>
  );
};

export default FindTutor;