"use client";

import { useState, useEffect } from "react";
import { supabase } from "../createClient";
import { div } from "motion/react-client";

// import SideNav from "./SideNav";

export default function Home() {
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
    <div>
      <div></div>
    </div>
  );
}
