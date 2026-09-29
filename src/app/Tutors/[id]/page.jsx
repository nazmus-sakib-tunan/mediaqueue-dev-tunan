import { BookingTutor } from "@/components/BookingTutor";
import { FaPhoneAlt, FaUniversity, FaWhatsapp } from "react-icons/fa";
import { IoBookSharp, IoSchool } from "react-icons/io5";
import { MdLocationPin, MdOutlineEmail } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";

const TutorDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/becomeTutors/${id}`, {
    cache: "no-store",
  });

  const result = await res.json();

  return (
    <main className="min-h-screen bg-[#fafaf7] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-6xl">

        {[result].map((tutor) => (
          <div key={tutor._id}>

            {/* Profile Header */}
            <section className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">

              {/* Cover */}
              <div className="h-32 bg-gradient-to-r from-emerald-700 via-teal-700 to-orange-500 sm:h-44" />

              <div className="px-5 pb-7 sm:px-8">
                <div className="-mt-16 flex flex-col gap-5 sm:-mt-20 sm:flex-row sm:items-end">

                  {/* Avatar */}
                  <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl border-4 border-white bg-stone-100 text-5xl shadow-md sm:h-36 sm:w-36">
                    <RxAvatar />
                  </div>

                  {/* Name */}
                  <div className="pb-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                        Verified Tutor
                      </span>

                      <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold capitalize text-orange-700">
                        {tutor.gender}
                      </span>
                    </div>

                    <h1 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
                      {tutor.name}
                    </h1>

                    <p className="mt-1 text-sm text-stone-500">
                      {tutor.department} • {tutor.universityName}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mt-8">
              <div className="mb-5">
                <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                  Contact
                </p>

                <h2 className="mt-1 text-2xl font-bold text-stone-900">
                  Contact Information
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

                {/* Email */}
                <div className="rounded-2xl border border-stone-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md">
                  <p className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-stone-400">
                    <MdOutlineEmail /> Email
                  </p>

                  <p className="mt-2 break-all text-sm font-medium text-stone-800">
                    {tutor.email}
                  </p>
                </div>

                {/* Phone */}
                <div className="rounded-2xl border border-stone-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md">
                  <p className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-stone-400">
                    <FaPhoneAlt /> Phone
                  </p>

                  <p className="mt-2 text-sm font-medium text-stone-800">
                    {tutor.phone}
                  </p>
                </div>

                {/* WhatsApp */}
                <div className="rounded-2xl border border-stone-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md">
                  <p className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-stone-400">
                    <FaWhatsapp /> WhatsApp
                  </p>

                  <p className="mt-2 text-sm font-medium text-stone-800">
                    {tutor.whatsapp}
                  </p>
                </div>

                {/* Guardian */}
                <div className="rounded-2xl border border-stone-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md">
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone-400">
                    Guardian
                  </p>

                  <p className="mt-2 text-sm font-medium text-stone-800">
                    {tutor.guardianMobile}
                  </p>
                </div>

              </div>
            </section>

            {/* Academic Information */}
            <section className="mt-10">
              <div className="mb-5">
                <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
                  Education
                </p>

                <h2 className="mt-1 text-2xl font-bold text-stone-900">
                  Academic Background
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                {/* School */}
                <div className="rounded-3xl border border-stone-200 bg-white p-6">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-xl">
                    <IoSchool />
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                    School
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-stone-900">
                    {tutor.schoolName}
                  </h3>

                  <p className="mt-2 text-sm capitalize text-stone-500">
                    {tutor.schoolMedium} Medium • {tutor.schoolGroup}
                  </p>
                </div>

                {/* College */}
                <div className="rounded-3xl border border-stone-200 bg-white p-6">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-xl">
                    <IoBookSharp />
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                    College
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-stone-900">
                    {tutor.collegeName}
                  </h3>

                  <p className="mt-2 text-sm capitalize text-stone-500">
                    {tutor.collegeGroup}
                  </p>
                </div>

                {/* University */}
                <div className="rounded-3xl border border-stone-200 bg-white p-6">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-xl">
                    <FaUniversity />
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                    University
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-stone-900">
                    {tutor.universityName}
                  </h3>

                  <p className="mt-2 text-sm text-stone-500">
                    {tutor.department} • {tutor.academicYear}
                  </p>
                </div>

                {/* Location */}
                <div className="rounded-3xl border border-stone-200 bg-white p-6">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-stone-100 text-xl">
                    <MdLocationPin />
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                    Location
                  </p>

                  <h3 className="mt-2 text-lg font-bold capitalize text-stone-900">
                    {tutor.location}
                  </h3>

                  <p className="mt-2 text-sm text-stone-500">
                    Available for tutoring
                  </p>
                </div>

              </div>
            </section>

            {/* CTA */}
            <section className="mt-8 overflow-hidden rounded-3xl bg-stone-900 p-6 sm:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                <div>
                  <p className="text-sm font-medium text-emerald-400">
                    Ready to learn?
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-white">
                    Interested in this tutor?
                  </h2>

                  <p className="mt-2 max-w-xl text-sm text-stone-400">
                    Book a session with this tutor and start your learning journey.
                  </p>
                </div>

                <div>
                  <BookingTutor tutor={tutor} />
                </div>

              </div>
            </section>

          </div>
        ))}

      </div>
    </main>
  );
};

export default TutorDetailsPage;