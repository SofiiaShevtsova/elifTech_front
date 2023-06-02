import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import {
  List,
  ListItem,
  Image,
  Heading,
  Text,
  Spacer,
  Center,
} from "@chakra-ui/react";
import { DeliveryContext } from "../App";

const ShopsList = () => {
  const [shopsList, setShopsList] = useState(null);
  const { choiceShop } = useContext(DeliveryContext);
  console.log(choiceShop);

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

  return (
    <>
      <Heading mb="20px">Shops:</Heading>
      <List spacing={3}>
        {shopsList &&
          shopsList.map((i) => (
            <ListItem
              key={i._id}
              className={choiceShop !== i._id && choiceShop !== "" && "disable"}
            >
              <Link to={`/shops/${i._id}`}>
                <Center
                  w="100%"
                  py="10px"
                  px="15%"
                  bg={
                    choiceShop !== i._id && choiceShop !== ""
                      ? "rgba(0, 0, 0, 0.5)"
                      : "rgba(255, 255, 255, 0.5)"
                  }
                  borderRadius="20px"
                >
                  <Image src={`${i.logo}`} w="30px" alt="Logo" />
                  <Spacer />
                  <Text as="b" fontSize="2xl" color="teal.800">
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
