import { Box, useColorModeValue } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ data, options }) => {
  const bgColor = useColorModeValue("gray.700", "gray.800");

  return (
    <Box bg={bgColor} p={4} borderRadius="md">
      <Line data={data} options={options} />
    </Box>
  );
};

export default LineChart;