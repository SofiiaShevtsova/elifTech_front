import { Outlet } from 'react-router-dom';

import { Grid, GridItem } from '@chakra-ui/react';

import ShopsList from '../../components/ShopsList';

const Shops = () => {
   return (
      <Grid
         h="90%"
         w="100%"
         templateColumns="repeat(4, 1fr)"
         gap={10}
      >
         <GridItem
            colSpan={1}
            bg="rgba(0, 0, 0, 0.1)"
            borderRadius="20px"
            p="20px"
         >
            <ShopsList />
         </GridItem>
         <GridItem
            colSpan={3}
            bg="rgba(0, 0, 0, 0.1)"
            borderRadius="20px"
            p="20px"
            overflow="auto"
         >
            <Outlet />
         </GridItem>
      </Grid>
   );
};

export default Shops;
