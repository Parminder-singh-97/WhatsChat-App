import React, { useEffect, useRef, useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { MdArchive } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import { TbCircleDotted } from "react-icons/tb";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <section 
      ref={sidebarRef}
      className={`sideBar ${
          isOpen ? "w-[300px]" : "w-[62px]"
        } overflow-x-hidden leftSidebar absolute z-40 top-0 left-0 h-[100vh] flex items-start ps-4 justify-between flex-col transition-all duration-300`}>
        <div className="TopMenu_icons w-[250px] ">
          <div className="BurgerMenu  mt-6 flex justify-start">

            <GiHamburgerMenu onClick={toggleSidebar} className="size-[25px] text-white cursor-pointer " /> 
          </div>
          <div className="MessageMenu mt-6 flex justify-start cursor-pointer ">
            <RiMessage2Line className="size-[25px] text-white " /> <span className="ps-9  inline-block">Chats</span>
          </div>
          <div className="CallMenu mt-6 flex justify-start cursor-pointer">
            <BsFillTelephoneFill className="size-[25px] text-white " />  <span className="ps-9  inline-block">Calls</span>
          </div>
          <div className="StatusMenu mt-6 flex justify-start cursor-pointer">
            <TbCircleDotted className="size-[25px] text-white " /> <span className="ps-9  inline-block">Status</span>
          </div>
          {/* <hr className="border-[1px] mt-5 w-[100%] m-auto rounded" /> */}
        </div>

        <div className="bottomMenu_icons ">
          <div className="StarMenu mt-6 flex justify-Start cursor-pointer">
            <FaRegStar className=" size-[25px] text-white " /> <span className="ps-9  inline-block text-nowrap">Stared Messages</span>
          </div>
          <div className="StarMenu mt-6 flex justify-start cursor-pointer">
            <MdArchive className="size-[25px] text-white " /> <span className="ps-9  inline-block text-nowrap">Archived Chats</span>
          </div>
          {/* <hr className="border-[1px] mt-5 w-[100%] m-auto rounded" /> */}
          <div className="StarMenu mt-6 flex justify-start cursor-pointer">
            <IoMdSettings className="size-[25px] text-white " /> <span className="ps-9  inline-block">Settings</span>
          </div>
          <div className="StarMenu mt-6 flex justify-start mb-5 cursor-pointer">
            <div className="w-7 rounded-full overflow-hidden ">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                className=""
              />  
            </div> <span className="ps-9  inline-block">Profile</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default SideBar;
