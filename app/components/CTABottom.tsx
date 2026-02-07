import Link from "next/link";
function CTABottom() {
  return (
    <div className="bg-linear-to-br from-[#6C38CA] from-40% to-[#B28FF1] outline outline-slate-200 h-fit w-screen py-10">
      <div>
        <h1 className="font-extrabold text-4xl">
          Ready to supercharge your project <br /> management?
        </h1>
        <p className="text-2xl italic my-10 text-white text-center mb-10">
          Join thoughts of developers and people managers who <br /> are already
          using Task Day to track their projects!
        </p>
        <Link href="/waitlist">
          <button className=" bg-linear-to-br from-[#6C38CA] from-40% to-[#B28FF1] shadow-md text-white font-semibold h-9 w-80 my-10 rounded-md hover:transition-transform hover:scale-[1.02] hover:bg-slate-800 md:w-60 md:mx-4">
            Join the Wait List <span className="font-bold h-4 w-3">→</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CTABottom;
