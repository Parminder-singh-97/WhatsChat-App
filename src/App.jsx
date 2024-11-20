import React, { useState } from "react";
import SideBar from "./Components/SideBar";
import LeftSide from "./Components/LeftSide";
import RightSide from "./Components/RightSide";

const App = () => {

  const [ClickedUserData, setChatUserClick] = useState()

  // Function to send data from child component to parent component
  function handledataFromChild(data) {

    setChatUserClick(data)
  }

  // console.log(ClickedUserData);

  return (
    <>
      <section className=" w-[100vw] overflow-x-auto  flex justify-end h-[100vh] bg-slate-950 relative">
        <SideBar />
        <LeftSide sendDataToParent={handledataFromChild} />

        <RightSide ClickedUserData={ClickedUserData}  />
      </section>
    </>
  );
};

export default App;
