// app/home/layout.tsx
import SideNav from "./SideNav";
import TopNav from "./topnav";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* 1. Left Column: Persistent SideNav */}
      <SideNav />

      {/* 2. Right Column: A vertical stack of TopNav and Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* TopNav sits at the very top of this right column */}
        <TopNav />

        {/* The actual page content scrollable area */}
        <main className="flex-1 overflow-y-auto bg-gray-50 text-black p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
