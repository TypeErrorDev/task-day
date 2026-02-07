import LandingPage from "./components/LandingPage";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center  w-screen ">
      <div className="flex flex-col items-center justify-center w-full flex-1 text-center">
        <LandingPage />
      </div>
    </div>
  );
}
