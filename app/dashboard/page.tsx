"use client";

import { useState, useEffect } from "react";
import { supabase } from "../createClient";
import TopNav from "../components/dashboard/TopNav";

function dashboard() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.from("projects").select("*");

      if (error) {
        console.error("Error fetching projects:", error);
        return;
      }
      console.log("Fetched Projects: ", data);
      setProjects(data);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="p-4">
      <TopNav />
      <h2 className="text-2xl font-bold mb-4 text-black">Your Projects</h2>
      {projects.length === 0 ? (
        <p className="text-black">No projects found. Time to create one!</p>
      ) : (
        <ul className="space-y-2">
          {projects.map((project) => (
            <li
              key={project.id}
              className="p-3 bg-white shadow rounded-lg border"
            >
              <h3 className="font-semibold text-black">
                {project.project_name}
              </h3>
              <p className="text-sm text-gray-600">
                Created at: {project.created_at}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default dashboard;
