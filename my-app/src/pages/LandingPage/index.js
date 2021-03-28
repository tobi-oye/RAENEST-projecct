import {} from "@chakra-ui/layout";
import { useState } from "react";
import HeroSection from "../LandingPage/components/HeroSection";
import MainBody from "../LandingPage/components/MainBody";

const LandingPage = () => {
  const [sideBarDisplay, setSideBarDisplay] = useState("none");
  const sideBarHandler = () =>
    sideBarDisplay === "none"
      ? setSideBarDisplay("block")
      : setSideBarDisplay("none");
  return (
    <>
      <HeroSection sideBarHandler={sideBarHandler} />
      <MainBody
        sideBarHandler={sideBarHandler}
        sideBarDisplay={sideBarDisplay}
      />
    </>
  );
};

export default LandingPage;
