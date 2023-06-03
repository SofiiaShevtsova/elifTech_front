import {
   Card,
   CardBody,
   Flex,
   Heading,
   Image,
   List,
   ListItem,
   Stack,
   Text,
   VStack,
} from '@chakra-ui/react';

import EmptyList from './EmptyList';

const HistoryList = ({ ordersList }) => {
   return (
      <List spacing={10}>
         {ordersList.length !== 0 ? (
            ordersList.map((i) => (
               <ListItem
                  key={i._id}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  border="2px solid rgba(0,0,0,0.5)"
                  borderRadius="20px"
                  p="20px"
               >
                  <Flex
                     w="70%"
                     gap="20px"
                     mr="20px"
                     overflow="auto"
                  >
                     {i.order.map((el) => (
                        <Card
                           minW="45%"
                           key={el._id}
                        >
                           <CardBody
                              display="flex"
                              gap="15px"
                           >
                              <Image
                                 src={el.image}
                                 alt="Green double couch with wooden legs"
                                 borderRadius="lg"
                                 w="60%"
                              />
                              <Stack
                                 mt="6"
                                 spacing="3"
                              >
                                 <Heading size="md">
                                    {el.dishName}
                                 </Heading>
                              </Stack>
                           </CardBody>
                        </Card>
                     ))}
                  </Flex>
                  <VStack>
                     <Text
                        color="blue.600"
                        fontSize="2xl"
                     >
                        Total price:{' '}
                        {i.totalPrice}$
                     </Text>
                     <Text
                        color="blue.600"
                        fontSize="2xl"
                     >
                        {i.dateOrder.slice(0, 10)}
                     </Text>
                  </VStack>
               </ListItem>
            ))
         ) : (
            <EmptyList />
         )}
      </List>
   );
};

export default HistoryList;
