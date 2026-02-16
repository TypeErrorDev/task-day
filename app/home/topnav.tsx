"use client";

import {
  BellIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { supabase } from "../createClient";

export default function TopNav() {
  const pathname = usePathname();
  const [userName, setUserName] = useState("Loading...");

  const fetchUserData = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user?.id) {
      console.log("No active session found");
      return;
    }
    const { data, error } = await supabase
      .from("users")
      .select("username")
      .eq("id", user.id)
      .single();

    if (error) {
      console.error("Error fetching username:", error.message);
    } else {
      setUserName(data.username);
    }
  };

  /* get the current link param and store into a variable but strip the leading slash, and capitalize the first letter. lets make sure to update when the sidenav links are clicked and the url changes */
  const segment = pathname.split("/").pop() || "home";
  const displayLink = segment.charAt(0).toUpperCase() + segment.slice(1);

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <header className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-8 shrink-0">
      {/* Left Section: User & Breadcrumb */}
      <div className="flex items-center gap-4 shrink-0 w-100 p-5 ">
        <h2 className="text-sm font-medium text-black">
          <span className="text-black font-bold">{userName}</span>
        </h2>
        <span className="text-gray-300">|</span>
        <nav className="text-sm font-semibold text-[#6C38CA]">
          {displayLink === "home" ? "unknown" : displayLink}
        </nav>
      </div>

      {/* Middle Section: Search Bar (flew-1 allows it to take up the middle space) */}
      <div className="flex-1 flex justify-center px-4">
        <form
          action="search"
          method="GET"
          className="relative w-full max-w-md flex items-center"
        >
          <input
            name="search"
            type="search"
            placeholder="Search..."
            className="w-full border border-gray-300 bg-gray-50 px-4 p-1 text-black focus:ring-2 focus:ring-[#6C38CA] focus:bg-white outline-none transition-all sm:text-sm box-border rounded-md placeholder-transparent sm:placeholder-gray-400"
          />
        </form>
      </div>

      {/* Right Section: Notification & Settings */}
      <div className="flex items-center gap-4 text-gray-500">
        <button className="p-2 hover:bg-gray-100 rounded-full transition-all hover:scale-110">
          <BellIcon className="size-6 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-all hover:scale-110">
          <Cog6ToothIcon className="size-6 text-gray-600" />
        </button>
      </div>
    </header>
  );
}
