import { useContext } from 'react';

import {
   Button,
   Grid,
   GridItem,
   Text,
   useToast,
} from '@chakra-ui/react';

import { DeliveryContext } from '../../App';
import Map from '../../components/Map';
import OrderList from '../../components/OrderList';
import UserForm from '../../components/UserForm';
import { addOrder } from '../../service/addOrder';

const Orders = () => {
   const { setOrderList, orderList } = useContext(
      DeliveryContext,
   );
   const toast = useToast();

   const onClick = async () => {
      await addOrder({
         orderList: orderList,
         total: totalPrice(),
         setOrder: setOrderList,
         toast: toast,
      });
   };

   const totalPrice = () => {
      if (orderList) {
         const total = orderList.reduce(
            (total, elem, i, array) => {
               const productPrice =
                  elem.price.slice(0, -1) *
                  elem.number;
               return (total =
                  total + productPrice);
            },
            0,
         );
         return total;
      }
   };

   return (
      <Grid
         templateColumns="repeat(2, 1fr)"
         gap="20px"
         templateRows="repeat(6, 1fr)"
         h="90%"
      >
         <GridItem
            colSpan={1}
            rowSpan={6}
            bg="rgba(0, 0, 0, 0.1)"
            borderRadius="20px"
            p="10px"
         >
            <Map />
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
            <OrderList />
         </GridItem>
         <GridItem
            colSpan={1}
            rowSpan={1}
            display="flex"
            justifyContent="flex-end"
            gap="150px"
            p="30px"
         >
            <Text
               color="blue.600"
               fontSize="2xl"
            >
               Total price: {totalPrice()}$
            </Text>
            <Button
               variant={
                  orderList.length === 0
                     ? 'outline'
                     : 'solid'
               }
               colorScheme="blue"
               size="lg"
               type="button"
               onClick={onClick}
               className={
                  orderList.length === 0 &&
                  'disable'
               }
            >
               Submit
            </Button>
         </GridItem>
      </Grid>
   );
};
export default Orders;
