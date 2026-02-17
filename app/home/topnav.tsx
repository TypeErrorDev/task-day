"use client";

import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation"; // Added useRouter
import { supabase } from "../createClient";
import { signOut } from "../login/actions"; // 1. Import your Server Action

export default function TopNav() {
  const pathname = usePathname();
  const router = useRouter(); // Initialize router
  const [userName, setUserName] = useState("Loading...");

  const fetchUserData = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user?.id) return;

    const { data, error } = await supabase
      .from("users")
      .select("username")
      .eq("id", user.id)
      .single();

    if (!error && data) {
      setUserName(data.username);
    }
  };

  const handleSignOut = async () => {
    try {
      // 1. Clear Server-Side Cookies via the Server Action
      await signOut();

      // 2. Clear Client-Side LocalStorage
      // Use .clear() to wipe everything, or .removeItem() for specific keys
      window.localStorage.clear();

      // Optional: Clear SessionStorage as well for a total reset
      window.sessionStorage.clear();

      // 3. Redirect and Refresh
      router.push("/login");
      router.refresh();
    } catch (err) {
      console.error("Sign out failed:", err);
    }
  };

  const segment = pathname.split("/").pop() || "home";
  const displayLink = segment.charAt(0).toUpperCase() + segment.slice(1);

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <header className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-8 shrink-0">
      <div className="flex items-center gap-4 shrink-0 w-100 p-5 ">
        <h2 className="text-sm font-medium text-black">
          <span className="text-black font-bold">{userName}</span>
        </h2>
        <span className="text-gray-300">|</span>
        <nav className="text-sm font-semibold text-[#6C38CA]">
          {displayLink === "Home" ? "Dashboard" : displayLink}
        </nav>
      </div>

      <div className="flex-1 flex justify-center px-4">
        <div className="relative w-full max-w-md">
          <input
            type="search"
            placeholder="Search..."
            className="w-full border border-gray-300 bg-gray-50 px-4 p-1 text-black rounded-md outline-none focus:ring-2 focus:ring-[#6C38CA]"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 text-gray-500">
        {/* 3. Updated Sign Out Button */}
        <button
          onClick={handleSignOut}
          className="text-sm font-semibold text-gray-600 hover:text-red-600 transition-colors"
        >
          Sign Out
        </button>

        <button className="p-2 hover:bg-gray-100 rounded-full transition-all">
          <BellIcon className="size-6 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-all">
          <Cog6ToothIcon className="size-6 text-gray-600" />
        </button>
      </div>
    </header>
  );
}
