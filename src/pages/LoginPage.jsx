import React from "react";
import { CircleUser } from "lucide-react";
import { LockKeyhole } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="w-3/12 mx-auto border border-gray-300 p-8 mt-20">
      <p className="text-4xl font-bold flex justify-center opacity-80">Login</p>
      <div className="mt-12">
        <p>Username</p>
        <p className="border-b border-gray-300 opacity-60 flex items-center">
          {" "}
          <CircleUser size={20} />
          Type your username
        </p>
      </div>

      <div className="mt-5">
        <p>Password</p>
        <p className="border-b border-gray-300 flex items-center opacity-60">
          {" "}
          <LockKeyhole size={20} />
          Type your password
        </p>
      </div>
      <div>
        <p className="pl-45 opacity-80 mt-2">Forgot password?</p>
      </div>

      <button className="border rounded-4xl px-32 justify-center flex mt-12 py-2 font-bold text-xl bg-fuchsia-500 text-white cursor-pointer hover:text-black hover:bg-blue-500 duration-1000 ">
        LOGIN
      </button>

      <p className="mt-10 text-sm font-bold opacity-70 flex justify-center">
        or Sign Up Using
      </p>

      <div className="flex justify-center space-x-4 mt-5">
        <p className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="px"
            height="30px"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none" />
            <path
              fill="#1e4573"
              d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
            />
            <path
              fill="#fff"
              d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"
            />
          </svg>
        </p>

        <p className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="px"
            height="30px"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none" />
            <g fill="none">
              <rect width="256" height="256" fill="#fff" rx="60" />
              <rect width="256" height="256" fill="#1d9bf0" rx="60" />
              <path
                fill="#fff"
                d="M199.572 91.411c.11 1.587.11 3.174.11 4.776c0 48.797-37.148 105.075-105.075 105.075v-.03A104.54 104.54 0 0 1 38 184.677q4.379.525 8.79.533a74.15 74.15 0 0 0 45.865-15.839a36.98 36.98 0 0 1-34.501-25.645a36.8 36.8 0 0 0 16.672-.636c-17.228-3.481-29.623-18.618-29.623-36.198v-.468a36.7 36.7 0 0 0 16.76 4.622c-16.226-10.845-21.228-32.432-11.43-49.31a104.8 104.8 0 0 0 76.111 38.582a36.95 36.95 0 0 1 10.683-35.283c14.874-13.982 38.267-13.265 52.249 1.601a74.1 74.1 0 0 0 23.451-8.965a37.06 37.06 0 0 1-16.234 20.424A73.5 73.5 0 0 0 218 72.282a75 75 0 0 1-18.428 19.13"
              />
            </g>
          </svg>
        </p>

        <p className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width=""
            height="30px"
            viewBox="0 0 256 262"
          >
            <path
              fill="#4285f4"
              d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
            ></path>
            <path
              fill="#34a853"
              d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
            ></path>
            <path
              fill="#fbbc05"
              d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
            ></path>
            <path
              fill="#eb4335"
              d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
            ></path>
          </svg>
        </p>
      </div>
    </div>
  );
}
