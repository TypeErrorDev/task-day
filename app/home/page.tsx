"use client";

import { useState, useEffect } from "react";
import { supabase } from "../createClient";
import FirstSteps from "./DashboardContent/FirstSteps/page";
import Dashboard from "./DashboardContent/Dashboard/page";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [toggleDashboardContent, setToggleDashboardContent] = useState([]);
  // const [loading, setLoading] = useState(true);

  const dashToggles = [
    { name: "First Steps", return: "<FirstSteps />" },
    { name: "Dashboard", return: "<Dashboard />" },
  ];

  const handleDashbaordSwitch = (value: string) => {
    switch (value) {
      case "First Steps":
        console.log("clicked First Steps");
        return <FirstSteps />;
      case "Dashboard":
        console.log("clicked Dashboard");
        return <Dashboard />;
    }
  };

  useEffect(() => {
    const fetchInitialData = async () => {
      const { data } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });
      if (data) setProjects(data);
    };
    fetchInitialData();
    const channel = supabase
      .channel("TaskDay")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "projects" },
        (payload) => {
          console.log("SIGNAL INTERCEPTED!", payload);
          if (payload.eventType === "INSERT") {
            setProjects((prev) => [payload.new, ...prev]);
          }
          if (payload.eventType === "DELETE") {
            setProjects((prev) =>
              prev.filter((item) => item.id !== payload.old.id),
            );
          }
          if (payload.eventType === "UPDATE") {
            setProjects((prev) =>
              prev.map((item) =>
                item.id === payload.new.id ? payload.new : item,
              ),
            );
          }
        },
      )
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="flex justify-center h-screen mt-15">
      <div className="flex justify-start items-start bg-amber-400  w-3/4">
        <div className=" text-4xl ">
          {dashToggles.map((item) => (
            <button
              type="submit"
              className="bg-slate-500 text-black text-xl p-2 rounded-2xl"
              key={item.name}
              onClick={() =>
                setToggleDashboardContent(handleDashbaordSwitch(item.name))
              }
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
