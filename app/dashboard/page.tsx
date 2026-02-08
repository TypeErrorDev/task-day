"use client";

import { useState, useEffect } from "react";
import { supabase } from "../createClient";

function dashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const { data, error } = await supabase.from("projects").select("*");
    if (error) {
      console.error("Error fetching projects:", error);
      return [];
    }
    console.log("Fetched projects:", data);
  };

  return (
    <div className="flex flex-col justify-center items-center text-center h-screen w-screen text-black bg-[#EFF6FF]">
      <h1 className="font-extrabold text-4xl text-shadow-lg/13 ">
        Welcome to your Dashboard
      </h1>
      <p className="mt-5 w-120 text-[#8C61D8] text-lg font-extrabold text-shadow-lg/13">
        Here you can manage your projects and tasks efficiently
      </p>
    </div>
  );
}

export default dashboard;
