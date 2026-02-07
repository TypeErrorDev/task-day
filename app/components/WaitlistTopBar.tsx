import Images from "../../public/Images";

function WaitlistTopBar() {
  return (
    <div className="flex items-start p-4 sm:outline item-center sm:outline-slate-200 w-full">
      {/* <div className="hidden sm:block mr-5 mt-5 h-10 w-10 bg-linear-90 from-[#4136F1] to-[#8743FF] rounded-lg shadow-md shadow-[#4136F1] "></div> */}
      <div className="hidden sm:block  text-2xl bg-clip-text text-transparent bg-linear-90 from-[#4136F1] to-[#8743FF] font-extrabold ">
        <img src={Images.logo} alt="TaskDay Logo" className="h-20 w-44 p-2" />
      </div>
    </div>
  );
}

export default WaitlistTopBar;
