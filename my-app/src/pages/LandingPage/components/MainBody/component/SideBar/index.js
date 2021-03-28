import { Box, Circle, Flex, VStack, Text } from "@chakra-ui/layout";
import { Button, Image, CloseButton } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMobileAlt,
  faCreditCard,
  faFileAlt,
  faFire,
} from "@fortawesome/free-solid-svg-icons";
import Elon from "../../../../../../assets/Landing-Page/MainBody/SideBar/elon.png";
const Sidebar = ({ sideBarHandler }) => {
  return (
    <>
      <Flex flexDir="column" h="200vh" bgColor="white">
        <Flex
          flexDir="column"
          bgColor="rgb(142,102,219)"
          p="30px 10px"
          pos="relative"
        >
          <Box
            pos="absolute"
            top="0px"
            right="0px"
            bgColor="black"
            borderRadius="5px"
          >
            <CloseButton
              color="rgb(142,102,219)"
              onClick={() => sideBarHandler()}
            />
          </Box>
          <Flex justifyContent="flex-start">
            <Circle bgColor="white" mr="20px">
              <Image
                boxSize="90px"
                borderRadius="full"
                src={`${Elon}`}
                alt="elon musk"
              />
            </Circle>
            <VStack
              ml="10px"
              color="white"
              textAlign="left"
              align="start"
              justifyContent="flex-end"
              fontSize="20px"
            >
              <Text>Elon Musk A</Text>
              <Text>ID: 9AD34990</Text>
            </VStack>
          </Flex>
          <Flex justifyContent="center" mt="30px">
            <Button borderRadius="3em" color="white" variant="outline">
              View Profile
            </Button>
          </Flex>
        </Flex>
        <VStack align="start" p="40px" spacing={10} bgColor="white">
          <Flex alignItems="center" cursor="pointer">
            <Circle p="8px" border="2px solid black" boxSize="50px" mr="20px">
              <FontAwesomeIcon
                color="rgb(142,102,219)"
                icon={faHome}
                size="2x"
              />
            </Circle>
            <Text fontSize="15px">Home</Text>
          </Flex>
          <Flex alignItems="center" cursor="pointer">
            <Circle p="8px" border="2px solid black" boxSize="50px" mr="20px">
              <FontAwesomeIcon
                color="rgb(142,102,219)"
                icon={faMobileAlt}
                size="2x"
              />
            </Circle>
            <Text fontSize="15px">Buy Airtime</Text>
          </Flex>
          <Flex alignItems="center" cursor="pointer">
            <Circle p="8px" border="2px solid black" boxSize="50px" mr="20px">
              <FontAwesomeIcon
                color="rgb(142,102,219)"
                icon={faMobileAlt}
                size="2x"
              />
            </Circle>
            <Text fontSize="15px">Send Money</Text>
          </Flex>
          <Flex alignItems="center" cursor="pointer">
            <Circle p="8px" border="2px solid black" boxSize="50px" mr="20px">
              <FontAwesomeIcon
                color="rgb(142,102,219)"
                icon={faCreditCard}
                size="2x"
              />
            </Circle>
            <Text fontSize="15px">Bills Payment</Text>
          </Flex>
          <Flex alignItems="center" cursor="pointer">
            <Circle p="8px" border="2px solid black" boxSize="50px" mr="20px">
              <FontAwesomeIcon
                color="rgb(142,102,219)"
                icon={faFileAlt}
                size="2x"
              />
            </Circle>
            <Text fontSize="15px">Free Credit Report</Text>
          </Flex>
          <Flex alignItems="center" cursor="pointer">
            <Circle p="8px" border="2px solid black" boxSize="50px" mr="20px">
              <FontAwesomeIcon
                color="rgb(142,102,219)"
                icon={faFire}
                size="2x"
              />
            </Circle>
            <Text fontSize="15px">Complaints</Text>
          </Flex>
        </VStack>
      </Flex>
    </>
  );
};

export default Sidebar;
