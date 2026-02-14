import Image from "next/image";
import Images from "../../../public/Images";

function TopNav() {
  return (
    <div className="flex items-start p-4 border-b item-center  w-screen">
      <div className="hidden sm:block  text-2xl bg-clip-text text-transparent bg-linear-90 from-[#4136F1] to-[#8743FF] font-extrabold ">
        <Image
          src={Images.logo}
          alt="TaskDay Logo"
          className="h-20 w-44"
          width={48}
          height={48}
        />
      </div>
    </div>
  );
}

export default TopNav;
