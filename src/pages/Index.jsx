import { Container, VStack, Text, Box, useColorModeValue } from "@chakra-ui/react";
import MetricCard from "../components/MetricCard";
import LineChart from "../components/LineChart";
import { useState } from "react";

const data = {
  labels: ["Apr 5", "Apr 7", "Apr 9", "Apr 11", "Apr 13", "Apr 15", "Apr 17", "Apr 19", "Apr 21", "Apr 23", "Apr 25", "Apr 27", "Apr 29", "May 1", "May 3"],
  datasets: [
    {
      label: "Bytes stored",
      data: [37.25, 37.25, 37.25, 37.25, 37.25, 37.25, 37.25, 37.25, 37.25, 37.25, 37.25, 37.25, 37.25, 37.25, 74.51],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      fill: true,
    },
    {
      label: "Bandwidth sent",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18.63],
      borderColor: "rgba(153, 102, 255, 1)",
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      fill: true,
    },
    {
      label: "Requests",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73],
      borderColor: "rgba(255, 159, 64, 1)",
      backgroundColor: "rgba(255, 159, 64, 0.2)",
      fill: true,
    },
  ],
};

const options = {
  scales: {
    x: {
      title: {
        display: true,
        text: "Date",
        color: "white",
      },
      ticks: {
        color: "white",
      },
    },
    y: {
      title: {
        display: true,
        text: "Value",
        color: "white",
      },
      ticks: {
        color: "white",
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: "white",
      },
    },
  },
};

const Index = () => {
  const bgColor = useColorModeValue("gray.800", "gray.900");
  const textColor = useColorModeValue("white", "gray.100");

  return (
    <Container maxW="container.xl" py={4} bg={bgColor} height="100vh">
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" color={textColor}>
          Billable Metrics
        </Text>
        <Box bg="blue.900" p={2} borderRadius="md">
          <Text fontSize="md" color="blue.300">
            These metrics are estimates (updated every 24 hours) and are not an accurate reflection of your bill
          </Text>
        </Box>
        <MetricCard label="Bytes stored" value="93.82GB" subValue="74.51GB" description="Current amount of stored bytes" />
        <MetricCard label="Object count" value="52K" subValue="55.88GB" description="Current number of objects" />
        <MetricCard label="Bandwidth sent" value="92.1GB" subValue="18.63GB" description="Total bandwidth sent" />
        <MetricCard label="Requests" value="73K" subValue="Total" description="Total number of requests" />
        <LineChart data={data} options={options} />
      </VStack>
    </Container>
  );
};

export default Index;