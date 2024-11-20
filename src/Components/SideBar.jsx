import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { MdArchive } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import { TbCircleDotted } from "react-icons/tb";

const SideBar = () => {
  return (
    <>
      <section className="sideBar w-[5%] leftSidebar absolute top-0 left-0 h-[100vh] flex items-center justify-between flex-col ">
        <div className="TopMenu_icons">
          <div className="BurgerMenu  mt-4 flex justify-center">
            <GiHamburgerMenu className="size-[25px] text-white " />
          </div>
          <div className="MessageMenu mt-4 flex justify-center">
            <RiMessage2Line className="size-[25px] text-white " />
          </div>
          <div className="CallMenu mt-4 flex justify-center">
            <BsFillTelephoneFill className="size-[25px] text-white " />
          </div>
          <div className="StatusMenu mt-4 flex justify-center">
            <TbCircleDotted className="size-[25px] text-white " />
          </div>
          <hr className="border-[1px] mt-5 w-[100%] m-auto rounded" />
        </div>

        <div className="bottomMenu_icons">
          <div className="StarMenu mt-4 flex justify-center">
            <FaRegStar className="size-[25px] text-white " />
          </div>
          <div className="StarMenu mt-4 flex justify-center">
            <MdArchive className="size-[25px] text-white " />
          </div>
          <hr className="border-[1px] mt-5 w-[100%] m-auto rounded" />
          <div className="StarMenu mt-4 flex justify-center">
            <IoMdSettings className="size-[25px] text-white " />
          </div>
          <div className="StarMenu mt-4 flex justify-center mb-5">
            <div className="w-7 rounded-full overflow-hidden ">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                className=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SideBar;
