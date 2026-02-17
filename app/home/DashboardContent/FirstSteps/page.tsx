"use client";

import { useState, useEffect } from "react";
import { useUser } from "@/app/context/UserContext";
import { supabase } from "@/app/createClient";
import { useRouter } from "next/navigation";

// Define the interface for your card data
interface FirstStepCard {
  id: string;
  name: string;
  image_url: string | null;
  link: string | null;
  created_at?: string;
}

// Define the interface for the user profile record
interface UserProfile {
  username: string;
}

function FirstSteps() {
  const { user, loading } = useUser();
  const [firstCards, setFirstCards] = useState<FirstStepCard[]>([]);
  const [username, setUsername] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      // 1. Fetch Cards with typed response
      const { data: cards, error: cardError } = await supabase
        .from("firstStepCards")
        .select("*")
        .order("created_at", { ascending: true });

      if (cards) setFirstCards(cards as FirstStepCard[]);
      if (cardError) console.error("Error fetching cards:", cardError.message);

      // 2. Fetch User Profile with typed response
      if (user?.id) {
        const { data: profile, error: profileError } = await supabase
          .from("users")
          .select("username")
          .eq("id", user.id)
          .single();

        if (profile) setUsername((profile as UserProfile).username);
        if (profileError)
          console.error("Error fetching profile:", profileError.message);
      }
    };

    if (!loading && user) {
      fetchData();
    } else if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  // Transform the image_url string into a full public URL
  const getImageUrl = (path: string | null): string => {
    if (!path) return "";

    const { data } = supabase.storage
      .from("firstStepsImages")
      .getPublicUrl(path);

    return data.publicUrl;
  };

  if (loading || !user) return <div className="p-8">Syncing roadmap...</div>;

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Welcome, {username || "Guest"}
        </h1>
        <p className="text-gray-500 mt-1">
          Select a card to manage your tasks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
        {firstCards.map((card) => (
          <a
            key={card.id}
            href={card.link || "#"}
            className="group border border-gray-200 rounded-3xl h-80 flex flex-col bg-white overflow-hidden shadow-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-2"
          >
            {/* Top 2/3: Image section */}
            <div className="h-2/3 bg-slate-50 relative overflow-hidden flex items-center justify-center border-b border-gray-100 p-6">
              {card.image_url ? (
                <img
                  src={getImageUrl(card.image_url)}
                  alt={card.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    console.error(`Missing asset: ${card.image_url}`);
                  }}
                />
              ) : (
                <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400 font-bold uppercase text-xs">
                  No Image
                </div>
              )}
            </div>

            {/* Bottom 1/3: Title Area */}
            <div className="p-6 h-1/3 flex items-center bg-white justify-between">
              <h2 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                {card.name}
              </h2>
              <span className="text-2xl text-slate-300 group-hover:text-blue-600 transition-all duration-300 transform group-hover:translate-x-1">
                →
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default FirstSteps;
