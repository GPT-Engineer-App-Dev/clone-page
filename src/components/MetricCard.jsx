import { Box, Flex, Text, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

const MetricCard = ({ label, value, subValue, description }) => {
  const bgColor = useColorModeValue("gray.700", "gray.800");
  const textColor = useColorModeValue("white", "gray.100");

  return (
    <Box bg={bgColor} p={4} borderRadius="md" w="100%">
      <Flex align="center" justify="space-between">
        <Flex align="center">
          <Text fontSize="xl" color={textColor} mr={2}>
            {label}
          </Text>
          <Tooltip label={description} fontSize="md">
            <InfoOutlineIcon color={textColor} />
          </Tooltip>
        </Flex>
        <Box textAlign="right">
          <Text fontSize="2xl" color={textColor}>
            {value}
          </Text>
          <Text fontSize="md" color={textColor}>
            {subValue}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default MetricCard;