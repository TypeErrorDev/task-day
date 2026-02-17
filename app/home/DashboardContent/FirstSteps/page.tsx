"use client";

import { useState, useEffect } from "react";
import { useUser } from "@/app/context/UserContext";
import { supabase } from "@/app/createClient";

interface FirstStepCard {
  id: string;
  name: string;
  image_url: string;
  created_at?: string;
  link: string;
}

function FirstSteps() {
  const { user, loading } = useUser();
  const [firstCards, setFirstCards] = useState<FirstStepCard[]>([]);

  // TODO: create a grid/flexbox container for 3x9 of cards that'll basically walk the user through creating a client -> creating a project -> adding tasks/employees -> invoicing the client after projects complete -> other helpful cards for analytics or communication with the client within the dashboard

  useEffect(() => {
    const fetchCards = async () => {
      const { data } = await supabase
        .from("firstStepCards")
        .select("*")
        .order("created_at", { ascending: false });

      if (data) setFirstCards(data);
    };
    fetchCards();
  }, []);

  if (loading) return <div>Checking session...</div>;
  if (!user) return <div>Guest</div>;

  return (
    <div>
      {/* Header Container */}
      <div className="my-5">
        <h1 className="text-4xl font-bold">
          Welcome, {user.user_metadata.full_name || user.email}
        </h1>
        <p className="text-md text-slate-500 font-semibold">
          Here is a <span className="font-bold text-black">custom plan</span>{" "}
          just for you and your company!
        </p>
      </div>
      {/* Cards container */}
      <div className="flex justify-between flex-wrap gap-4">
        {/* Cards */}
        {firstCards.length > 0 ? (
          firstCards.map((card) => (
            //
            // Card Container
            <div className="border border-gray-200 rounded-md h-80 w-64 transition delay-150 duration-300 ease-in-out hover:-translate-y-2 hover:scale-101 hover:duration-450 shadow-lg shadow-black/20  cursor-pointer">
              {/* Image container */}
              <div className="bg-slate-100 h-2/3 flex items-center justify-center border-b border-gray-300 rounded-t-md">
                <span className="tex-slate-400">Image Goes Here</span>
              </div>
              {/* Card Info */}
              <div className="p-4 h-1/3">
                <h2 className="text-sm font-semibold leading-tight">
                  {card.name}
                </h2>
              </div>
            </div>
          ))
        ) : (
          <p className="text-slate-400">No steps found in your plan yet.</p>
        )}
      </div>
    </div>
  );
}

export default FirstSteps;
