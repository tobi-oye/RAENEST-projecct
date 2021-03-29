import { HamburgerIcon } from "../../../../styles";

const HeroSection = ({ sideBarHandler }) => {
  return (
    <div className="hero-section">
      <div className="hamburger" onClick={() => sideBarHandler()}>
        <HamburgerIcon fontSize="2em" />
      </div>
    </div>
  );
};

export default HeroSection;
