import {
  List,
  ListItem,
  Card,
  CardBody,
  Image,
  Text,
  Stack,
  Heading,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

const OrderList = ({orderList}) => {
  return (
    <>
      <List spacing={10}>
        {orderList&&orderList.map((i) => (
          <ListItem key={i._id}>
            <Card w="80%" mx="auto">
              <CardBody display="flex" gap="15px">
                <Image
                  src={i.image}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  w="60%"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{i.dishName}</Heading>
                  <Text color="blue.600" fontSize="2xl">
                    {i.price}
                  </Text>
                  <NumberInput defaultValue={i.number} min={1} max={i.quantity}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Stack>
              </CardBody>
            </Card>
          </ListItem>
        ))}
      </List>
    </>
  );
};
export default OrderList;
