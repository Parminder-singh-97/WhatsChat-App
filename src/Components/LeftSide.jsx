import React, { useContext, useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";
import { UserContext } from "../Data";
import { fetchUserData } from "../Store/dataSlice";
import { showUser, userClicked } from "../Store/clickedUserSlice";
import { useDispatch, useSelector } from "react-redux";

const LeftSide = ({ sendDataToParent }) => {
  const dispatch = useDispatch();

  const Users = useContext(UserContext);

  const [clickUser, setClickUser] = useState(false);
  const [ChatUserClick, setChatUserClick] = useState([]);

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  const ShowChat = (user) => {
    sendDataToParent(ChatUserClick);
    setClickUser(!clickUser);
  };

  return (
    <section className="leftSide w-[40%] h-auto  leftBg relative  ">
      <div className="p-4 h-[70px] flex justify-between items-center shadow-lg w-full leftHeader text-white text-3xl font-bold">
        <h2 className=" ">Chats</h2>
        <div className="  flex justify-between items-center gap-4">
          <div className="editIcon flex justify-between items-center ">
            <FaRegEdit className="size-[25px] text-white " />
          </div>

          <div className="editIcon flex justify-center items-center  ">
            <IoFilterSharp className="size-[25px] text-white " />
          </div>
        </div>
      </div>
      <div className="search_user h-[10vh] flex justify-center items-center shadow-md shadow-black ">
        <input
          type="text"
          name="searchUser"
          id="searchUser"
          className="w-[95%]  p-3 rounded-lg text-white bg-white"
          placeholder="Search or Start New Chat"
        />
      </div>

      <div className="UserMessages h-[80vh]  overflow-y-auto ">
        {Users.map((users, id) => {
          return (
            <div
              key={id}
              className="flex items-center gap-4 p-4 cursor-pointer hover:bg-green-950"
              onClick={() => {
                setChatUserClick(users);
                dispatch(showUser(users));
                ShowChat();
                dispatch(userClicked(clickUser));
              }}
            >
              <div className="userImage border-green-500 border-[3px] w-[45px] h-[45px] rounded-full bg-gray-300 overflow-hidden">
                <img
                  onClick={() => setChatUserClick(users)}
                  src={users.picture.medium}
                  alt="{name}"
                />
              </div>
              <div className="userMessage w-[80%]">
                <div
                  onClick={() => setChatUserClick(users)}
                  className="userName text-white text-lg"
                >
                  {users.name.first} {users.name.last}
                </div>
                <div
                  onClick={() => setChatUserClick(users)}
                  className="messageText text-gray-400 text-sm"
                >
                  {users.email}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LeftSide;
