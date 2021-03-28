import { Box } from "@chakra-ui/layout";

import { HamburgerIcon } from "../../../../styles";

const HeroSection = ({ sideBarHandler }) => {
  return (
    <Box p="10px" onClick={() => sideBarHandler()} cursor="pointer">
      <HamburgerIcon fontSize="2em" />
    </Box>
  );
};

export default HeroSection;
