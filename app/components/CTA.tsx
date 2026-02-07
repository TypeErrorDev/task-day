import Link from "next/link";

function CTA() {
  return (
    <div className="flex flex-col items-center outline outline-slate-300/30 h-full w-screen ">
      <h1 className="mt-10 text-5xl/25 font-extrabold tracking-tight text-slate-900 text-[72px] text-center ">
        Track Projects With
        <br />
        <span className="block text-[#8743FF] text-shadow-lg/40 italic">
          TaskDay
        </span>
      </h1>
      <p className="text-[#535151c9] font-bold  text-start mt-20 text-[22px]">
        Streamline your workflow, boost productivity, and <br />
        never miss a deadline. The ultimate project tracking <br /> solution for
        developers, teams and hobbyists alike!!
      </p>
      <div className="flex flex-col justify-center items-center md:flex-row sm:my-5">
        <Link href="/register">
          <button className="bg-linear-to-br from-[#6C38CA] from-40% to-[#B28FF1] shadow-md text-white font-semibold h-9 w-80 my-4 rounded-md hover:transition-transform hover:scale-[1.02] hover:bg-slate-800 md:w-60 md:mx-4">
            Get Started For Free <span className="font-bold h-4 w-3">→</span>
          </button>
        </Link>
        <Link href="/login">
          <button className="border shadow-md font-semibold h-9 w-80 md:w-60 hover:transition-transform hover:scale-[1.02] hover:bg-[#faf9f9] rounded-md text-black border-none">
            Already Registered?
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CTA;
