import React from "react";
import { CiFaceSmile, CiMicrophoneOn, CiPaperplane, CiVideoOn } from "react-icons/ci";
import { GoPaperclip } from "react-icons/go";
import { IoCallOutline, IoSearchSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

const RightSide = () => {
  // Select data from Redux store
  const clickedUser = useSelector((state) => state.clickedUser.userData || {});
  const clicked = useSelector((state) => state.clickedUser.userClicked);

  // Derive singleUser data
  const singleUser = {
    name: clickedUser?.name?.first || undefined,
    picture: clickedUser?.picture?.large || "",
  };

  // Prevent rendering if singleUser.name is undefined
  if (!singleUser.name) {

    return (
      <div className="flex flex-col justify-center items-center h-full w-full text-center">
        <h1 className="text-4xl text-gray-700">click On User wait For Users</h1>
      </div>
    );
  }else {

    return (
      <>
        {/* Original JSX remains unchanged */}
        <section className="rightSide h-auto w-[100%] rightBg">
          <div className="h-[70px] leading-8 flex justify-between items-center rightHeader shadow-lg text-white text-3xl font-bold px-6">
            <div className="flex items-center gap-4 cursor-pointer hover:bg-green-950">
              <div className="userImage border-green-500 border-[3px] w-[45px] h-[45px] rounded-full bg-gray-300 overflow-hidden">
                <img src={singleUser.picture} alt="" />
              </div>
              <div className="userChatHead flex flex-col justify-center">
                <div className="userName text-white text-[18px] leading-tight">
                  {singleUser.name}
                  <p className="messageText text-gray-400 text-[10px]">online</p>
                </div>
              </div>
            </div>
  
            <div className="flex justify-between items-center gap-4">
              <div className="flex gap-4 bg-indigo-900 p-3 rounded-2xl">
                <CiVideoOn className="size-[25px] text-white cursor-pointer" />
                <IoCallOutline className="size-[25px] text-white cursor-pointer" />
              </div>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="m-1">
                  <IoSearchSharp className="size-[25px] text-white cursor-pointer" />
                </div>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content bg-base-100 rounded-box z-[1] w-96 mt-5 p-2 shadow"
                >
                  <label className="input w-[50%] input-bordered rounded-full flex items-center gap-2">
                    <input
                      type="text"
                      className=""
                      placeholder="Search within Chat"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </label>
                </ul>
              </div>
            </div>
          </div>
  
          <div className="message_section h-[80vh] overflow-y-auto p-4">
            <div className="chat chat-start">
              <div className="chat-bubble chat-bubble-primary">
                You have been given a great honor.
              </div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble chat-bubble-primary">
                You have been given a great honor.
              </div>
            </div>
          </div>
  
          <div className="message_type h-[9vh] flex justify-between items-center border-gray-500 px-6 pt-5 pb-3 border-t-2">
            <div className="flex gap-4">
              <CiFaceSmile className="size-[25px] text-white cursor-pointer" />
              <GoPaperclip className="size-[25px] text-white cursor-pointer" />
            </div>
            <div className="input_section w-[100%] mx-4">
              <input
                type="text"
                placeholder="Type your message..."
                className="input bg-white text-black font-bold w-[100%] rounded-full border-none"
              />
            </div>
            <div className="send_section flex gap-4">
              <CiPaperplane className="size-[25px] text-white cursor-pointer" />
              <CiMicrophoneOn className="size-[25px] text-white cursor-pointer" />
            </div>
          </div>
        </section>
      </>
    );

  }

};

export default RightSide;
