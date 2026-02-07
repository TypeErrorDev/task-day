import Waitlist from "./components/Waitlist";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center  w-screen ">
      <div className="flex flex-col items-center justify-center w-full flex-1 text-center">
        <Waitlist />
      </div>
    </div>
  );
}
