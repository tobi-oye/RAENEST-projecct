import {} from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import HeroSection from "../LandingPage/components/HeroSection";
import MainBody from "../LandingPage/components/MainBody";
import SideBar from "../LandingPage/components/MainBody/component/SideBar";
import { dashboard } from "../../api/index";

const LandingPage = () => {
  const [sideBarDisplay, setSideBarDisplay] = useState("none");
  const sideBarHandler = () =>
    sideBarDisplay === "none"
      ? setSideBarDisplay("block")
      : setSideBarDisplay("none");

  let [menu, setMenu] = useState("");
  useEffect(() => dashboard().then((response) => setMenu({ response })), []);
  console.log(menu);
  return menu.response ? (
    <div className="wrapper">
      <div className="hero">
        <HeroSection sideBarHandler={sideBarHandler} />
      </div>
      <div className="main-body">
        <MainBody
          menu={menu}
          sideBarHandler={sideBarHandler}
          sideBarDisplay={sideBarDisplay}
        />
      </div>
      <div className="sidebar" style={{ display: sideBarDisplay }}>
        <SideBar sideBarHandler={sideBarHandler} menu={menu} />
      </div>
    </div>
  ) : (
    <div> LOADING </div>
  );
};

export default LandingPage;
