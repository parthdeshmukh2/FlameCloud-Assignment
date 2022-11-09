import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { GrDrag } from "react-icons/gr";
import { BsThreeDotsVertical } from "react-icons/bs";


const Accordian = ({ title }) => {
  const [display, setDisplay] = useState(true);

  return (
    <>
      {display && (
        <Accordion allowToggle h="40px" w="100%">
          <AccordionItem>
            <h2>
              <Box
                display={"flex"}
                justifyContent="space-between"
                p="8px 16px"
                gap="8px "
                borderRadius="8px"
              >
                <Box display="flex" w="10%" alignItems="center">
                  <Box>
                    <GrDrag />
                  </Box>
                  <Box
                    ml="4"
                    fontSize="16px"
                    fontFamily="Manrope"
                    fontWeight="700"
                    color="#1E293B"
                  >
                    {title}
                  </Box>
                </Box>

                <Box display="flex" right="10px" alignItems="center">
                  <Box
                    zIndex="1"
                    display="flex"
                    alignItems="center"
                    top="auto"
                    bottom="auto"
                  >
                    {/* <BsThreeDotsVertical onClick={handledropDown } as={Button} /> */}
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BsThreeDotsVertical />}
                        bg="white"
                      ></MenuButton>
                      <MenuList>
                        <MenuItem>Edit Category</MenuItem>
                        <MenuItem>Manage Access</MenuItem>
                        <MenuItem
                          bg="red.100"
                          color="red"
                          onClick={() => setDisplay(false)}
                        >
                          Delete
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </Box>

                  <AccordionButton>
                    <AccordionIcon />
                  </AccordionButton>
                </Box>
              </Box>
            </h2>
            <AccordionPanel pb={4}>
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. */}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      )}
    </>
  );
};

export default Accordian;
