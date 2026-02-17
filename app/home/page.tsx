"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FirstSteps from "./DashboardContent/FirstSteps/page";
import Dashboard from "./DashboardContent/Dashboard/page";
import { supabase } from "@/app/createClient";

export interface Project {
  id: string | number;
  project_name: string;
  description: string;
  created_at: string;
  last_updated: string;
}

export default function Home() {
  const dashToggles = [{ name: "First Steps" }, { name: "Dashboard" }];

  const [activeTab, setActiveTab] = useState("First Steps");
  const [renderedTab, setRenderedTab] = useState("First Steps");
  const [projects, setProjects] = useState<Project[] | null>(null);

  // Staged toggle logic
  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
    setTimeout(() => {
      setRenderedTab(tabName);
    }, 400);
  };

  // Supabase realtime subscription
  useEffect(() => {
    const fetchInitialData = async () => {
      const { data } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (data) setProjects(data as Project[]);
    };

    fetchInitialData();

    const channel = supabase
      .channel("TaskDay")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "projects" },
        (payload) => {
          if (payload.eventType === "INSERT") {
            setProjects((prev) =>
              prev
                ? [payload.new as Project, ...prev]
                : [payload.new as Project],
            );
          }
          if (payload.eventType === "DELETE") {
            setProjects((prev) =>
              prev ? prev.filter((item) => item.id !== payload.old.id) : null,
            );
          }
          if (payload.eventType === "UPDATE") {
            setProjects((prev) =>
              prev
                ? prev.map((item) =>
                    item.id === payload.new.id
                      ? (payload.new as Project)
                      : item,
                  )
                : null,
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
    <div className="flex flex-col items-center h-screen mt-15">
      <div className="w-3/4 p-4">
        <div className="relative flex bg-slate-200 p-1 rounded-2xl w-fit">
          {dashToggles.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <button
                key={item.name}
                type="button"
                onClick={() => handleTabChange(item.name)}
                className={`relative px-6 py-2 text-sm font-medium transition-colors duration-300 z-10 ${
                  isActive
                    ? "text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-slate-800 rounded-xl z-[-1]"
                    transition={{ type: "spring", bounce: 0.4, duration: 0.9 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Rendering components with a Fade Animation */}
      <div className="w-3/4 mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={renderedTab}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.03 }}
          >
            {renderedTab === "First Steps" ? (
              <FirstSteps />
            ) : (
              <Dashboard projects={projects} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
