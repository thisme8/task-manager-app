import { Leaf, Megaphone, LogOut, Box, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#152a1f] via-[#253a2f] to-[#152a1f] py-10 max-w-screen">
      <div className=" flex flex-col items-center pt-[5%] pb-[5%] ml-[3%] mr-[3%] justify-between">
        <div className="text-[#daa520] flex flex-col font-serif font-playfair ">
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-bold flex items-center">
            <Leaf className="inline  h-[30px] w-[30px]" />
            <div className="ml-[8px]"> . BLYS-FUL TASKS . </div>
            <Leaf className="inline h-[30px] w-[50px]" />
          </h1>
          <h2 className="text-md italic opacity-85">
            Ease into Task Management
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
