import { Grid, GridItem } from "@chakra-ui/react";
import ShopsList from "../../components/ShopsList";
import { Outlet } from "react-router-dom";

const Shops = () => {
  return (
    <Grid h="200px" templateColumns="repeat(4, 1fr)" gap={10}>
      <GridItem colSpan={1} bg="tomato">
        <ShopsList />
      </GridItem>
      <GridItem colSpan={3} bg="tomato">
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default Shops;
