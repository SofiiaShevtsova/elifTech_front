import {
   useContext,
   useEffect,
   useState,
} from 'react';
import { Link } from 'react-router-dom';

import {
   Center,
   Heading,
   Image,
   List,
   ListItem,
   Spacer,
   Text,
} from '@chakra-ui/react';
import axios from 'axios';

import { DeliveryContext } from '../App';

const ShopsList = () => {
   const [shopsList, setShopsList] =
      useState(null);
   const { orderList } = useContext(
      DeliveryContext,
   );

   const disableShop = (id) =>
      orderList.length !== 0 &&
      orderList[0].shop !== id;

   useEffect(() => {
      (async () => {
         try {
            const { data } = await axios.get(
               `https://delivery-api-quzs.onrender.com/api/shops/allShops`,
            );
            setShopsList(data);
         } catch (error) {}
      })();
   }, []);

   return (
      <>
         <Heading mb="20px">Shops:</Heading>
         <List spacing={3}>
            {shopsList &&
               shopsList.map((i) => (
                  <ListItem
                     key={i._id}
                     className={
                        disableShop(i._id) &&
                        'disable'
                     }
                  >
                     <Link
                        to={`/delivery/shops/${i._id}`}
                     >
                        <Center
                           w="100%"
                           py="10px"
                           px="15%"
                           bg={
                              disableShop(i._id)
                                 ? 'rgba(0, 0, 0, 0.5)'
                                 : 'rgba(255, 255, 255, 0.5)'
                           }
                           borderRadius="20px"
                        >
                           <Image
                              src={`${i.logo}`}
                              w="30px"
                              alt="Logo"
                           />
                           <Spacer />
                           <Text
                              as="b"
                              fontSize="2xl"
                              color="teal.800"
                           >
                              {i.shopName}
                           </Text>
                        </Center>
                     </Link>
                  </ListItem>
               ))}
         </List>
      </>
   );
};

export default ShopsList;
