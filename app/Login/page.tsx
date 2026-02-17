"use client";

import { useState } from "react";
import { supabase } from "../createClient";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "./actions";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const result = await signIn(formData);
    if (result?.error) {
      alert(result.error);
      setLoading(false);
    } else {
      router.push("/home");
      router.refresh();
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        alert(error.message);
      } else if (data.user) {
        router.push("/home");
        router.refresh();
      }
    } catch (err) {
      console.error("Auth Error:", err);
      alert("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center text-center h-screen w-screen text-black bg-[#EFF6FF]">
      <div className="flex flex-col justify-center items-center rounded-lg p-10 w-full h-fit max-w-2xl border-2 shadow-lg shadow-purple-200">
        <div>
          <h1 className="font-sans text-6xl/25 bg-clip-text text-transparent bg-linear-to-r from-[#4136F1] to-[#8743FF] font-extrabold pb-4 w-150">
            Task Day <br /> Login
          </h1>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center text-center w-full max-w-md px-4 h-150"
          >
            <input
              type="email"
              placeholder="Enter your email address..."
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value.toLowerCase())}
              className="border border-gray-400 h-12 w-full max-w-sm rounded-lg px-3 mb-2 focus:ring-2 focus:ring-[#4136F1] outline-none"
              required
            />
            <input
              type="password"
              placeholder="Enter your Password..."
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-400 h-12 w-full max-w-sm rounded-lg px-3 my-2 focus:ring-2 focus:ring-[#4136F1] outline-none"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-linear-to-br from-[#6C38CA] from-40% to-[#B28FF1] shadow-md shadow-purple-200 text-white font-semibold h-12 w-full max-w-sm mt-4 rounded-md hover:transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
            >
              {loading ? "Standby..." : "Log In"}
            </button>
            <p className="mt-4 text-sm">
              Forgot to register for the waitlist?{" "}
              <Link
                href="/waitlist"
                className="text-[#4136F1] font-semibold hover:underline"
              >
                Waitlist Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
