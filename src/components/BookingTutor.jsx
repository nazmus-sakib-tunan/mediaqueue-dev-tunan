"use client";

import { ToastContainer } from "react-toastify";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  FieldError,
  DateField,
} from "@heroui/react";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export function BookingTutor({ tutor }) {
  const { data: session } = authClient.useSession();



  const user = session?.user;

  const [bookingDate, setBookingDate] = useState(null);

  // Date select করলে console হবে
  const handleDateChange = (date) => {
    setBookingDate(date);


  };
  const { _id, name } = tutor;

  const handleBooking = async () => {
    const bookingData = {
      userId: user.id,
      UserName: user.name,
      userEmail: user.email,
      tutorName: name,
      tutorID: _id,
      bookingDate: new Date(bookingDate)
    }
    console.log(bookingData);
  }
  return (
    <Modal>
      {/* Book Session Button */}
      <Button
        className="inline-block rounded-xl bg-emerald-500 px-7 py-3 text-center text-sm font-bold text-white transition hover:bg-emerald-600"
      >
        Book Session
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">

            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <PiChalkboardTeacherFill className="size-5" />
              </Modal.Icon>

              <Modal.Heading>
                Book Tutor
              </Modal.Heading>

              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the information below to book this tutor.
              </p>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">

                <form className="mx-auto w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">

                  {/* Student Information */}
                  <div className="mb-6">
                    <h2 className="text-lg font-semibold text-slate-900">
                      Student Information
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Your account information is automatically filled.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-5">

                    {/* Student Name */}
                    <TextField name="studentName" isRequired>
                      <Label>Student Name</Label>

                      <Input
                        value={user?.name || ""}
                        readOnly
                        className="rounded-xl border-slate-200 bg-slate-50"
                      />

                      <FieldError />
                    </TextField>

                    {/* Student Email */}
                    <TextField
                      name="studentEmail"
                      type="email"
                      isRequired
                    >
                      <Label>Student Email</Label>

                      <Input
                        type="email"
                        value={user?.email || ""}
                        readOnly
                        className="rounded-xl border-slate-200 bg-slate-50"
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

                  </div>

                  {/* Tutor Information */}
                  <div className="mb-6 mt-8 border-t border-slate-100 pt-6">

                    <h2 className="text-lg font-semibold text-slate-900">
                      Tutor Information
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Tutor information is automatically selected.
                    </p>

                  </div>

                  <div className="grid grid-cols-1 gap-5">

                    {/* Tutor ID */}
                    <TextField name="tutorId">
                      <Label>Tutor ID</Label>

                      <Input
                        value={tutor?._id || ""}
                        readOnly
                        className="rounded-xl border-slate-200 bg-slate-50"
                      />
                    </TextField>

                    {/* Tutor Name */}
                    <TextField name="tutorName">
                      <Label>Tutor Name</Label>

                      <Input
                        value={tutor?.name || ""}
                        readOnly
                        className="rounded-xl border-slate-200 bg-slate-50"
                      />
                    </TextField>

                  </div>

                  {/* Booking Date */}
                  <div className="mt-8 border-t border-slate-100 pt-6">

                    <DateField
                      className="w-[256px]"
                      name="date"
                      value={bookingDate}
                      onChange={handleDateChange}
                    >
                      <Label>Booking Date</Label>

                      <DateField.Group>
                        <DateField.Input>
                          {(segment) => (
                            <DateField.Segment segment={segment} />
                          )}
                        </DateField.Input>
                      </DateField.Group>
                    </DateField>

                  </div>

                  {/* Hidden data */}
                  <input
                    type="hidden"
                    name="tutorId"
                    value={tutor?._id || ""}
                  />

                  <input
                    type="hidden"
                    name="tutorName"
                    value={tutor?.name || ""}
                  />

                  <input
                    type="hidden"
                    name="bookStatus"
                    value="Pending"
                  />

                </form>

              </Surface>
            </Modal.Body>

            <Modal.Footer>

              <Button
                slot="close"
                variant="secondary"
              >
                Cancel
              </Button>

              <Button
                type="button"
                onClick={handleBooking}
                className="bg-emerald-500 text-white hover:bg-emerald-600"
              >
                Book Now
              </Button>

              <ToastContainer />

            </Modal.Footer>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}