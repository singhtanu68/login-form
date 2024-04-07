"use client";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";


export default function LoginForm({ title }) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Simulate login
    if (email === "tanusingh8561@gmail.com" && password === "12345678") {
          toast.success("Login successful");
          router.push("/dashboard");
      
      // Clear fields
      emailRef.current.value = "";
      passwordRef.current.value = "";
    } else if (email === "tanusingh8561@gmail.com" && password !== "12345678") {
      toast.error("Invalid password");
    } else {
      toast.error("Invalid email");
    }
  };

  return (
    <div>
      {" "}
      <h1 className="justify-center items-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white my-6">
        {title ? title : "Sign in to your account"}
      </h1>
      <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            ref={emailRef}
            id="email"
            autoComplete="email"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com"
          />
        </div>
        <div>
          <labe class="mb-2 block  text-sm font-medium text-gray-900 dark:text-white">
            Password
          </labe>
          <div class="relative flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="••••••••"
              ref={passwordRef}
              required
              class="pl-4 pr-14 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <div class="absolute right-4">
              <button type="button" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
