"use client";

import { useRouter } from "next/navigation";
import { Card, Separator } from "@heroui/react";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.image,
    });

    console.log({ data, error });

    if (data) {
      router.push("/");
    }

    if (error) {
      alert(error.message);
    }
  };
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google"
    })
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-10">
      <div className="w-full max-w-md">
        <Card className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-2 shadow-xl shadow-slate-200/50 backdrop-blur">
          <div className="rounded-2xl bg-white p-6 sm:p-8">


            <div className="mb-7 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-lg font-bold text-white shadow-lg shadow-blue-500/20">
                MQ
              </div>

              <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
                Create your account
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                Sign up to get started with TuitionMedia
              </p>
            </div>

            <Form
              className="flex w-full flex-col gap-5"
              onSubmit={onSubmit}
            >

              {/* Name */}
              <TextField
                isRequired
                name="name"
                type="text"
              >
                <Label className="mb-2 block text-sm font-medium text-slate-700">
                  Name
                </Label>

                <Input
                  placeholder="Enter your name"
                  className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-blue-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />

                <FieldError className="mt-1 text-xs text-red-500" />
              </TextField>

              {/* Image */}
              <TextField
                isRequired
                name="image"
                type="url"
              >
                <Label className="mb-2 block text-sm font-medium text-slate-700">
                  Image URL
                </Label>

                <Input
                  placeholder="https://example.com/image.jpg"
                  className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-blue-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />

                <FieldError className="mt-1 text-xs text-red-500" />
              </TextField>

              {/* Email */}
              <TextField
                isRequired
                name="email"
                type="email"
                validate={(value) => {
                  if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                  ) {
                    return "Please enter a valid email address";
                  }

                  return null;
                }}
              >
                <Label className="mb-2 block text-sm font-medium text-slate-700">
                  Email
                </Label>

                <Input
                  placeholder="john@example.com"
                  className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-blue-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />

                <FieldError className="mt-1 text-xs text-red-500" />
              </TextField>

              {/* Password */}
              <TextField
                isRequired
                name="password"
                type="password"
                minLength={6}
                validate={(value) => {
                  if (value.length < 6) {
                    return "Password must be at least 6 characters";
                  }

                  if (!/[A-Z]/.test(value)) {
                    return "Password must have an uppercase letter";
                  }

                  if (!/[a-z]/.test(value)) {
                    return "Password must have a lowercase letter";
                  }

                  return null;
                }}
              >
                <Label className="mb-2 block text-sm font-medium text-slate-700">
                  Password
                </Label>

                <Input
                  placeholder="Enter your password"
                  className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-blue-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />

                <Description className="mt-2 text-xs leading-5 text-slate-400">
                  Must have an uppercase letter, a lowercase letter, and at
                  least 6 characters.
                </Description>

                <FieldError className="mt-1 text-xs text-red-500" />
              </TextField>

              {/* Submit */}
              <div className="flex gap-3 pt-2">
                <Button
                  type="submit"
                  className="h-11 flex-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg"
                >
                  <Check />
                  Submit
                </Button>
              </div>
            </Form>
            <div>
              <div className="flex justify-center items-center gap-3">
                <Separator />
                <div className="whitespace-nowrap text-gray-500">Or sign with</div>
                <Separator />
              </div>
              <Button onClick={handleGoogleSignIn} className="mt-2 w-full bg-white text-black border border-black hover:-translate-y-0.5"> <FcGoogle />Sign in With Google</Button>
            </div>


            <p className="mt-6 text-center text-xs text-slate-400">
              By continuing, you agree to our terms and privacy policy.
            </p>

          </div>
        </Card>
      </div>
    </div>
  );
};

export default SignUpPage;