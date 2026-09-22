"use client";
import { Button, FieldError, Input, Label, ListBox, TextArea, TextField, Select } from '@heroui/react';


const BecomeTutor = () => {
  const onSubmit = async (e) => {
    e.preventDefault()
    const formdata = new FormData(e.currentTarget)

    const tutors = Object.fromEntries(formdata.entries());

    console.log("submit button click")
    console.log(tutors);

    const res = await fetch('http://localhost:5000/becomeTutors', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(tutors)
    })
    const data = await res.json();
    console.log(data);
  }


  return (
    <div>


      <div className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-5xl">

          {/* Header */}
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-600">
              Join Our Tutor Community
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Become a Tutor
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
              Share your knowledge, inspire students, and build your teaching career
              with us.
            </p>
          </div>

          {/* Form Card */}
          <form
            onSubmit={onSubmit}
            className="mx-auto w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 md:p-10"
          >

            {/* Personal Information */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-slate-900">
                Personal Information
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Tell us a little about yourself.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

              {/* Name */}
              <TextField name="name" isRequired>
                <Label>Name</Label>
                <Input
                  placeholder="Enter your full name"
                  className="rounded-xl border-slate-200"
                />
                <FieldError />
              </TextField>

              {/* Gender */}
              <TextField name="gender" isRequired>
                <Label>Gender</Label>
                <Input
                  placeholder="Male / Female"
                  className="rounded-xl border-slate-200"
                />
                <FieldError />
              </TextField>

              {/* Email */}
              <TextField name="email" type="email" isRequired>
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="example@gmail.com"
                  className="rounded-xl border-slate-200"
                />
                <FieldError />
              </TextField>

              {/* Phone */}
              <TextField name="phone" isRequired>
                <Label>Phone</Label>
                <Input
                  type="tel"
                  placeholder="01XXXXXXXXX"
                  className="rounded-xl border-slate-200"
                />
                <FieldError />
              </TextField>

              {/* WhatsApp */}
              <TextField name="whatsapp" isRequired>
                <Label>WhatsApp Number</Label>
                <Input
                  type="tel"
                  placeholder="01XXXXXXXXX"
                  className="rounded-xl border-slate-200"
                />
                <FieldError />
              </TextField>

              {/* Facebook */}
              <TextField name="facebook">
                <Label>Facebook ID / Link</Label>
                <Input
                  placeholder="facebook.com/yourprofile"
                  className="rounded-xl border-slate-200"
                />
                <FieldError />
              </TextField>

              {/* Guardian Mobile */}
              <TextField name="guardianMobile" isRequired>
                <Label>Guardian Mobile</Label>
                <Input
                  type="tel"
                  placeholder="01XXXXXXXXX"
                  className="rounded-xl border-slate-200"
                />
                <FieldError />
              </TextField>

              {/* Location */}
              <TextField name="location" isRequired>
                <Label>Location</Label>
                <Input
                  placeholder="Dhaka, Bangladesh"
                  className="rounded-xl border-slate-200"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Academic Information */}
            <div className="mb-8 mt-12 border-t border-slate-100 pt-8">
              <h2 className="text-lg font-semibold text-slate-900">
                Academic Information
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Provide your educational background.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

              {/* School Name */}
              <TextField name="schoolName" isRequired>
                <Label>School Name</Label>
                <Input
                  placeholder="Enter school name"
                  className="rounded-xl border-slate-200"
                />
                <FieldError />
              </TextField>

              {/* School Medium */}
              <TextField name="schoolMedium" isRequired>
                <Label>School Medium</Label>
                <Input
                  placeholder="Bangla / English Version / English Medium"
                  className="rounded-xl border-slate-200"
                />
                <FieldError />
              </TextField>

              {/* School Group */}
              <TextField name="schoolGroup">
                <Label>School Group</Label>
                <Input
                  placeholder="Science / Commerce / Arts"
                  className="rounded-xl border-slate-200"
                />
                <FieldError />
              </TextField>

              {/* College Name */}
              <TextField name="collegeName" isRequired>
                <Label>College Name</Label>
                <Input
                  placeholder="Enter college name"
                  className="rounded-xl border-slate-200"
                />
                <FieldError />
              </TextField>

              {/* College Group */}
              <TextField name="collegeGroup">
                <Label>College Group</Label>
                <Input
                  placeholder="Science / Commerce / Arts"
                  className="rounded-xl border-slate-200"
                />
                <FieldError />
              </TextField>

              {/* University */}
              <TextField name="universityName" isRequired>
                <Label>University Name</Label>
                <Input
                  placeholder="Enter university name"
                  className="rounded-xl border-slate-200"
                />
                <FieldError />
              </TextField>

              {/* Department */}
              <TextField name="department" isRequired>
                <Label>Department</Label>
                <Input
                  placeholder="Computer Science & Engineering"
                  className="rounded-xl border-slate-200"
                />
                <FieldError />
              </TextField>

              {/* Academic Year */}
              <TextField name="academicYear" isRequired>
                <Label>Academic Year</Label>
                <Input
                  placeholder="2025 - 2026"
                  className="rounded-xl border-slate-200"
                />
                <FieldError />
              </TextField>
            </div>






            {/* Submit */}
            <div className="mt-10 border-t border-slate-100 pt-8">
              <Button
                type="submit"
                className="w-full rounded-xl bg-cyan-500 py-3 font-medium text-white transition hover:bg-cyan-600"
              >
                Become a Tutor
              </Button>

              <p className="mt-3 text-center text-xs text-slate-400">
                By submitting this form, you agree to provide accurate information.
              </p>
            </div>
          </form>
        </div>
      </div>


    </div>
  );
};

export default BecomeTutor;