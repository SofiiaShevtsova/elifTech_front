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

const OrderList = () => {
  return (
    <>
      <List>
        <ListItem>
          <Card key="12233"w='70%' mx='auto'>
            <CardBody display='flex' gap='15px'>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                w='60%'
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Big Mak</Heading>
                <Text color="blue.600" fontSize="2xl">
                  5$
                </Text>
                <NumberInput defaultValue={15} min={10} max={20}>
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
      </List>
    </>
  );
};
export default OrderList;
