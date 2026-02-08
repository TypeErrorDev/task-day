"use client";

import { useState, useEffect } from "react";

function dashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects from your backend or database
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  console.log("Projects:", projects);

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
