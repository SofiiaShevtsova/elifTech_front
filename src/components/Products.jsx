import {
  Flex,
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
  Text,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, Outlet, useLocation } from "react-router-dom";

const Products = () => {
  const { id } = useParams();
  const [productsList, setProductsList] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/api/products/${id}`
        );
        setProductsList(data);
      } catch (error) {}
    })();
  }, []);
  console.log(productsList);

  return (
    <div>
      <Flex flexWrap="wrap" gap="50px" p="20px" justify="center">
        {productsList &&
          productsList.map((i) => (
            <Card key={i._id} width="40%">
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{i.dishName}</Heading>
                  <Text color="blue.600" fontSize="2xl">
                    {i.price}
                  </Text>

                  <Text>{i.composition.join()}</Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="blue">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}
      </Flex>
    </div>
  );
};

export default Products;
