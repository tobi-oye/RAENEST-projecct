import {} from "@chakra-ui/layout";
import { useState } from "react";
import HeroSection from "../LandingPage/components/HeroSection";
import MainBody from "../LandingPage/components/MainBody";
import SideBar from "../LandingPage/components/MainBody/component/SideBar";

const LandingPage = () => {
  const [sideBarDisplay, setSideBarDisplay] = useState("none");
  const sideBarHandler = () =>
    sideBarDisplay === "none"
      ? setSideBarDisplay("block")
      : setSideBarDisplay("none");
  return (
    <div className="wrapper">
      <div className="hero">
        <HeroSection sideBarHandler={sideBarHandler} />
      </div>
      <div className="main-body">
        <MainBody
          sideBarHandler={sideBarHandler}
          sideBarDisplay={sideBarDisplay}
        />
      </div>
      <div className="sidebar" style={{ display: sideBarDisplay }}>
        <SideBar sideBarHandler={sideBarHandler} />
      </div>
    </div>
  );
};

export default LandingPage;
