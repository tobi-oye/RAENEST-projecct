import { Button } from "@chakra-ui/button";
import { Flex, Box, Text, Circle, HStack } from "@chakra-ui/layout";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faHandHoldingUsd,
  faSearch,
  faMobileAlt,
  faTv,
  faPlug,
} from "@fortawesome/free-solid-svg-icons";

import SideBar from "../MainBody/component/SideBar";

const MainBody = ({ sideBarDisplay, sideBarHandler }) => {
  return (
    <>
      <Flex
        flexDir="column"
        p="30px 10px"
        textAlign="center"
        bgColor="rgb(244,242,251)"
      >
        <Box bgColor="rgb(240,232,255)" p="10px" borderRadius="0.5em" mb="20px">
          <Flex
            justifyContent="space-between"
            mb="50px"
            fontSize="2xl"
            fontWeight="0"
          >
            <Box>
              <Text>YOUR WALLET</Text>
            </Box>
            <Box>
              <Text>Feb 2.2021</Text>
            </Box>
          </Flex>
          <Box>
            <Text mb="10px">Wallet Balance</Text>
            <Text mb="10px" fontSize="5xl">
              N 14.61
            </Text>
          </Box>

          <Flex justifyContent="space-between" p="0px 20px">
            <Flex flexDir="column" alignItems="center">
              <Circle bgColor="rgb(110,62,203)" h="65px" w="65px" mb="10px">
                <FontAwesomeIcon
                  icon={faHandHoldingUsd}
                  size="2x"
                  color="white"
                />
              </Circle>
              <Text>Withdraw</Text>
            </Flex>
            <Flex flexDir="column" alignItems="center">
              <Circle bgColor="rgb(110,62,203)" h="65px" w="65px" mb="10px">
                <FontAwesomeIcon icon={faWallet} size="2x" color="white" />
              </Circle>
              <Text>Fund Wallet</Text>
            </Flex>
            <Flex flexDir="column" alignItems="center">
              <Circle bgColor="rgb(110,62,203)" h="65px" w="65px" mb="10px">
                <FontAwesomeIcon icon={faSearch} size="2x" color="white" />
              </Circle>

              <Text>Transactions</Text>
            </Flex>
          </Flex>
        </Box>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          h="350px"
          bgColor="white"
          borderRadius="0.5em"
          mb="20px"
        >
          <Text mb="20px">Need cash instantly ?</Text>
          <Button bgColor="rgb(67,1,194)" color="white" borderRadius="0px">
            {" "}
            Apply for a Loan
          </Button>
        </Flex>
        <Flex
          flexDir="column"
          h="350px"
          bgColor="white"
          borderRadius="0.5em"
          p="10px 20px"
        >
          <Flex justifyContent="space-between" alignItems="center">
            <Text>Categories</Text>
            <Box fontSize="2em">
              <HStack>
                <ChevronLeftIcon /> <ChevronRightIcon />
              </HStack>
            </Box>
          </Flex>
          <hr />
          <Flex
            justifyContent="space-around"
            fontSize="12px"
            w="100%"
            mt="30px"
          >
            <Flex flexDir="column" flexBasis="20%">
              <Box mb="20px">
                <FontAwesomeIcon icon={faMobileAlt} size="4x" />
              </Box>
              <Text>Mobile & Internet Data</Text>
            </Flex>
            <Flex flexDir="column" flexBasis="20%">
              <Box mb="20px">
                <FontAwesomeIcon icon={faTv} size="4x" />
              </Box>
              <Text>Cable TV</Text>
            </Flex>
            <Flex flexDir="column" flexBasis="20%">
              <Box mb="20px">
                <FontAwesomeIcon icon={faPlug} size="4x" />
              </Box>
              <Text>Power & Utility</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Box
        pos="absolute"
        zIndex="2"
        left="0px"
        top="0px"
        display={sideBarDisplay}
        w="85%"
      >
        <SideBar sideBarHandler={sideBarHandler} />
      </Box>
    </>
  );
};

export default MainBody;
