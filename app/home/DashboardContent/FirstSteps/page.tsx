"use client";

import { useUser } from "@/app/context/UserContext";

function FirstSteps() {
  const { user, loading } = useUser();
  if (loading) return <div>Checking session...</div>;
  if (!user) return <div>Guest</div>;

  // TODO: create a grid/flexbox container for 3x9 of cards that'll basically walk the user through creating a client -> creating a project -> adding tasks/employees -> invoicing the client after projects complete -> other helpful cards for analytics or communication with the client within the dashboard

  return (
    <div>
      <div>
        <p className="text-4xl font-bold">
          Welcome, {user.user_metadata.full_name || user.email}
        </p>
      </div>
    </div>
  );
}

export default FirstSteps;
