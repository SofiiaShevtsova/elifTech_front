import { useState } from "react";
import { Box } from "@chakra-ui/react";
import HistoryForm from "../../components/HistoryForm";
import HistoryList from "../../components/HistoryList";

const History = () => {
  const [ordersList, setOrdersList] = useState([]);

  return (
    <>
      <Box mt="50px">
        <HistoryForm setOrdersList={setOrdersList} />
      </Box>
      <Box mt="50px" h="50%" overflow="auto">
        <HistoryList ordersList={ordersList} />
      </Box>
    </>
  );
};

export default History;
