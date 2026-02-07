"use client";
import Image from "next/image";
import { supabase } from "../createClient";
import { useState } from "react";

function Waitlist() {
  const [email, setEmail] = useState("");

  const handleJoin = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data, error } = await supabase.from("waitlist").insert([{ email }]);

    if (error) {
      console.error("Error Joining:", error.message);
    } else {
      alert("You're on the list!");
    }
  };

  const waitlistCards = {
    smartScheduling: {
      image: "/calendarIcon.png",
      title: "Smart Scheduling",
      description:
        "Intelligent calendar integration that optimizes your daily tasks and projects",
    },
    timeIcon: {
      image: "/clockIcon.png",
      title: "Time Blocking",
      description:
        "Effortlessly manage your time with advanced time blocking and productivity techniques",
    },
    aiIcon: {
      image: "/lightningIcon.png",
      title: "AI-Powered Insights",
      description:
        "Get personalized productivity recommendations based on your work patterns",
    },
    goalIcon: {
      image: "/targetIcon.png",
      title: "Goal Tracking",
      description:
        "Set, monitor and achieve your personal and professional goals with precision",
    },
  };

  return (
    // Background div
    <div className="flex flex-col justify-center text-black bg-[#D0DCEC] w-screen h-fit">
      {/* Main Container Div */}

      <main className="flex flex-col justify-center items-center bg-[#EFF6FF] w-11/12 m-5 md:w-150 md:m-auto md:mt-10 md:mb-5 rounded-3xl shadow-zinc-600 shadow-lg font-sans">
        <h1 className="text-4xl font-bold text-[#8C61D8] text-shadow-lg/13 text-center my-10">
          Task Day Wait List
        </h1>
        {/* Features Cards */}
        <div className="flex flex-col justify-center items-center gap-4 mb-10">
          {Object.entries(waitlistCards).map(
            ([key, { image, title, description }]) => (
              <div
                key={key}
                className=" bg-white rounded-lg shadow-md p-6 w-90"
              >
                <Image
                  src={image}
                  alt={`${title} icon`}
                  className="w-12 h-12 mb-4"
                  width={48}
                  height={48}
                />
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-600">{description}</p>
              </div>
            ),
          )}
        </div>
        {/* Joining the Waitlist Form */}
        <div className="flex flex-col justify-center items-center bg-white mt-10 w-full h-fit rounded-b-3xl">
          <h1 className="text-4xl font-bold mt-10">
            Join Task Days Early Access
          </h1>
          <p className="italic text-center font-semibold w-100 text-[#535151c9] mt-5">
            Transform your productivity. Be among the first to experience the
            future of Project Management.
          </p>
          <div className="flex flex-col justify-center text-center mb-10">
            <form onSubmit={handleJoin}>
              <input
                type="email"
                placeholder="Enter your email address..."
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-400 h-12 w-100 rounded-lg px-3 my-5 "
                required
              />
              <button
                type="submit"
                className="bg-linear-to-br from-[#6C38CA] from-40% to-[#B28FF1] shadow-md shadow-purple-200 text-white font-semibold h-12 w-full mt-2 rounded-md  md:mx-4 md:w-96  hover:transition-transform hover:scale-[1.02] hover:bg-[#faf9f9]"
              >
                Join our Waitlist
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Waitlist;
