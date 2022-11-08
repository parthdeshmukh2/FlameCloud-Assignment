import React from "react";
import { Box, Text, Stack, Button } from "@chakra-ui/react";
import { SmallAddIcon } from "@chakra-ui/icons";
import { IoMdContacts } from "react-icons/io";
const HomePage = () => {
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
          >
            Manage Access
          </Button>
          <Button
            leftIcon={<SmallAddIcon />}
            colorScheme="blue"
            variant="solid"
          >
            Call us
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default HomePage;
