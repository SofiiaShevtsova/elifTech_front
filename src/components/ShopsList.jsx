import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
    UnorderedList,
  Heading,
  Text,
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
          <Heading>Shops:</Heading>
      <List spacing={3}>
        {shopsList &&
          shopsList.map((i) => (
            <ListItem key={i._id}>
              {/* <ListIcon as={MdCheckCircle} color='green.500' /> */}
              <Link to={`/shops/${i._id}`}>
                <Text>{i.shopName}</Text>
              </Link>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default ShopsList;
