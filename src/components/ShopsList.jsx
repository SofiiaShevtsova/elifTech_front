import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  List,
  ListItem,
  Center,
  Image,
  Heading,
  Text,
  Spacer,
} from "@chakra-ui/react";

const ShopsList = () => {
  const [shopsList, setShopsList] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/api/shops/allShops`
        );
        setShopsList(data);
      } catch (error) {}
    })();
  }, []);

  console.log(shopsList);

  return (
    <>
      <Heading mb="20px">Shops:</Heading>
      <List spacing={3}>
        {shopsList &&
          shopsList.map((i) => (
            <ListItem key={i._id}>
              <Link to={`/shops/${i._id}`}>
                <Center
                  w="100%"
                  py="10px"
                  px="15%"
                  bg="rgba(255, 255, 255, 0.5)"
                  border="2px solid black"
                  borderRadius="20px"
                >
                  <Image src={`${i.logo}`} w="30px" alt="Logo" />
                  <Spacer />
                  <Text as='b' fontSize='2xl' color="teal.800">
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
