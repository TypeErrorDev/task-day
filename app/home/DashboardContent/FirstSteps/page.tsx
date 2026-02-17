"use client";

import { useUser } from "@/app/context/UserContext";

interface FirstStepCard {
  name: string;
  image: string;
}

function FirstSteps() {
  const { user, loading } = useUser();
  if (loading) return <div>Checking session...</div>;
  if (!user) return <div>Guest</div>;

  // TODO: create a grid/flexbox container for 3x9 of cards that'll basically walk the user through creating a client -> creating a project -> adding tasks/employees -> invoicing the client after projects complete -> other helpful cards for analytics or communication with the client within the dashboard

  const firstStepsCards: FirstStepCard[] = [
    { name: "Manage every aspect of your jobs", image: "placeholder" },
    { name: "Send your invoices with confidence", image: "placeholder" },
    { name: "Creating your client profile", image: "placeholder" },
    {
      name: "Send quotes blazingly fast and with a professional look",
      image: "placeholder",
    },
    { name: "Allocate your manhours for every task/job", image: "placeholder" },
    {
      name: "View your analytics in a visually appealing and easily digestable dashboard",
      image: "placeholder",
    },
    {
      name: "Add employees to your team dynamically",
      image: "placeholder",
    },
  ];

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
        {firstStepsCards.map((card) => (
          // Card Container
          <div className="border rounded-md h-80 w-64 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-101 hover:duration-450 shadow-lg cursor-pointer">
            {/* Image container */}
            <div className="bg-slate-100 h-2/3 flex items-center justify-center border-b rounded-t-md">
              <span className="tex-slate-400">Image Goes Here</span>
            </div>
            {/* Card Info */}
            <div className="p-4 h-1/3">
              <h2 className="text-sm font-semibold leading-tight">
                {card.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FirstSteps;
