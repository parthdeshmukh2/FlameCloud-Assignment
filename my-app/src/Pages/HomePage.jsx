import React, { useState } from "react";
import {
  Box,
  Text,
  Stack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  ModalCloseButton,
  Input,
} from "@chakra-ui/react";
import { SmallAddIcon } from "@chakra-ui/icons";
import { IoMdContacts } from "react-icons/io";
import Accordian from "../Components/Accordian";
import Marketing from "../Components/Marketing";
const HomePage = () => {
  const [modal, setModal] = useState(false);
  const [newPlans, setNewPlans] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleModal = (item) => {

    setModal(true);
  };

  const handlePlans = (item) => {

    setNewPlans(true);
  };

  return (
    <Box bg="#F5F5F5">
      <Box w="96px" h="24px" position="absolute" left="120px" top="120px">
        <Text fontWeight="400" fontSize="14px" color="#64748B">
          SOP
        </Text>
      </Box>

      <Box display="flex" justifyContent="space-between">
        <Box>
          <Text
            fontSize="32px"
            fontWeight="700"
            fontFamily="Manrope"
            color="#0F172A"
            position="absolute"
            left="120px"
            top="144px"
          >
            Action Plans
          </Text>
        </Box>

        <Stack
          direction="row"
          spacing={4}
          bg="white"
          position="absolute"
          top="144px"
          right="98"
        >
          <Button
            leftIcon={<IoMdContacts />}
            colorScheme="blue"
            variant="outline"
            onClick={handleModal}
          >
            Manage Access
          </Button>
          {modal && (
            <Modal isOpen={true} onClose={() => onClose(setModal(!modal))}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                 
                <Text color='#2563EB' fontFamily='Manrope' fontWeight='700 ' fontSize='18px'>
                  Sales
                </Text>
                </ModalBody>

                <ModalFooter>
                  <Button
                    colorScheme="blue"
                    mr={3}
                    onClick={() => onClose(setModal(!modal))}
                  >
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          )}
          <Button
            leftIcon={<SmallAddIcon />}
            colorScheme="blue"
            variant="solid"
            onClick={handlePlans}
          >
            New Plan
          </Button>

          {newPlans && (
            <Modal isOpen={true} onClose={() => onClose(setNewPlans(!newPlans))}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Plan Name</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
             
                 <Text fontSize='12px' fontFamily='Manrope'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odio voluptatem ipsa doloribus maiores sed, dolorum beatae quasi aliquid debitis.</Text>
                 <Input placeholder="Enter Plan" mt='4'/>
                </ModalBody>

                <ModalFooter>
                  <Button
                    colorScheme="red"
                    mr={3}
                    variant='outline'
                    onClick={() => onClose(setNewPlans(!modal))}
                  >
                    Cancle
                  </Button>
                  <Button
                    colorScheme="blue"
                    mr={3}
                    variant='solid'
                    onClick={() => onClose(setNewPlans(!modal))}
                  >
                    Create
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          )}
        </Stack>
      </Box>
      <Box display="flex" flexDirection="column">
        <Box position="absolute" left="110px" top="262px" w="1065px">
          <Marketing/>
        </Box>

        <Box position="absolute" left="110px" top="555px" w="1065px">
          <Accordian title="Design" />
        </Box>

        <Box position="absolute" left="110px" top="625" w="1065px">
          <Accordian title="Sales" />
        </Box>

       
      </Box>
    </Box>
  );
};

export default HomePage;
