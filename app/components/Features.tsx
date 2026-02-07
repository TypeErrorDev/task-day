import FeatureBackgroundSvgs from "./FeatureBackgroundSvgs";

function Features() {
  const featureCards = {
    taskIcon: {
      image: "/taskIcon.png",
      title: "Task Management",
      description:
        "Create, assign, and track tasks with ease, while keeping your projects on schedule",
    },
    analyticsIcon: {
      image: "/analyticsIcon.png",
      title: "Analytics Dashboard",
      description:
        "Get insights into your project's progress with real-time analytics and visual reporting",
    },
    timeTrackingIcon: {
      image: "/clockIcon.png",
      title: "Time Tracking",
      description:
        "Monitor man-hour accounting on tasks and projects to optimize your team's productivity",
    },
  };

  return (
    <div className="relative flex justify-center text-black bg-[#fafafa] outline outline-slate-200 h-full w-screen overflow-hidden">
      {/* Background SVGs */}
      <FeatureBackgroundSvgs />

      {/* Foreground content */}
      <div className="relative z-10 italic">
        <h1 className="font-extrabold text-2xl text-shadow-lg/13 mt-10">
          Everything you need to manage projects effectively
        </h1>

        <p className="mt-5 w-full text-[#8C61D8] text-lg font-extrabold text-shadow-lg/13">
          Powerful features that help you take control of your projects
        </p>

        <div className="flex flex-col lg:flex-row justify-center md:justify-between items-center my-15 gap-8">
          {Object.entries(featureCards).map(
            ([key, { image, title, description }]) => (
              <div
                key={key}
                className="relative z-20 bg-white rounded-lg shadow-md p-6 w-90"
              >
                <img
                  src={image}
                  alt={`${title} icon`}
                  className="w-12 h-12 mb-4"
                />
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-600">{description}</p>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

export default Features;
