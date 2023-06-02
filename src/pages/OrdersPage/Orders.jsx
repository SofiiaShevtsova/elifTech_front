import { Grid, GridItem, Text, Button } from "@chakra-ui/react";
import UserForm from "../../components/UserForm";
import OrderList from "../../components/OrderList";
import { useState, useEffect } from "react";

const Orders = () => {
  const [orderList, setOrderList] = useState(null);

  const totalPrice = () => {
    if (orderList) {
      const total = orderList.reduce((total, elem, i, array) => {
        const productPrice = elem.price.slice(0, -1) * elem.number;
        return total = total + productPrice;
      }, 0);
      return total
    }
  };

  useEffect(() => {
    const orderListStorege =
      JSON.parse(localStorage.getItem("order-list")) || [];
    setOrderList(() => orderListStorege);
  }, []);

  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap="20px"
      templateRows="repeat(6, 1fr)"
      h="90%"
    >
      <GridItem
        colSpan={1}
        rowSpan={5}
        bg="rgba(0, 0, 0, 0.1)"
        borderRadius="20px"
        p="10px"
      >
        <UserForm />
      </GridItem>
      <GridItem
        colSpan={1}
        rowSpan={5}
        bg="rgba(0, 0, 0, 0.1)"
        borderRadius="20px"
        p="10px"
        overflow="auto"
      >
        <OrderList orderList={orderList} />
      </GridItem>
      <GridItem
        colSpan={2}
        rowSpan={1}
        display="flex"
        justifyContent="flex-end"
        gap="150px"
        p="30px"
      >
        <Text color="blue.600" fontSize="2xl">
          Total price: {totalPrice()}$
        </Text>
        <Button variant="solid" colorScheme="blue" size="lg">
          Submit
        </Button>
      </GridItem>
    </Grid>
  );
};
export default Orders;
