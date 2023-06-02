import { Grid, GridItem, Text, Button } from "@chakra-ui/react";
import UserForm from "../../components/UserForm";
import OrderList from "../../components/OrderList";

const Orders = () => {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap={1}
      templateRows="repeat(6, 1fr)"
      h="90%"
    >
      <GridItem colSpan={1} rowSpan={5} bg="tomato" p="10px">
        <UserForm />
      </GridItem>
      <GridItem colSpan={1} rowSpan={5} bg="tomato" p="10px" overflow="auto">
        <OrderList />
      </GridItem>
      <GridItem
        colSpan={2}
        rowSpan={1}
        bg="tomato"
        display="flex"
        justifyContent="flex-end"
        gap="150px"
        p="30px"
      >
        <Text color="blue.600" fontSize="2xl">
          Total price: 250$
        </Text>
        <Button variant="solid" colorScheme="blue" size="lg">
          Submit
        </Button>
      </GridItem>
    </Grid>
  );
};
export default Orders;
