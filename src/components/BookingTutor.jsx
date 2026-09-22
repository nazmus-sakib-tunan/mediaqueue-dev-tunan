"use client";


import { Envelope } from "@gravity-ui/icons";
import { ToastContainer, toast } from 'react-toastify';
import { Button, Input, Label, Modal, Surface, TextField, ListBox, TextArea, Select, FieldError } from "@heroui/react";

export function BookingTutor() {

  const onSubmit = async (e) => {
    e.preventDefault()
    const formdata = new FormData(e.currentTarget);




  }
  return (
    <Modal>
      <Button className={'inline-block rounded-xl bg-emerald-500 px-7 py-3 text-center text-sm font-bold text-white transition hover:bg-emerald-600'}>Book Session</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Contact Us</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and we ll get back to you. The modal adapts automatically
                when the keyboard appears on mobile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
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
                      <Input placeholder="Enter university name"
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

                  </div>




                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button onClick={() => toast.success("Button clicked successfully!")} slot="close">Book Now</Button>
              <ToastContainer />
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}