import axios from "axios";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";

const HistoryForm = ({ setOrdersList }) => {
  const toast = useToast();
  let email = "";
  let phone = "";

  const getOrdersHistory = async (e) => {
    if (e.code === "Enter") {
      e.preventDefault();
      try {
        const user = email ? { email: email } : { phone: phone };
        const { data } = await axios.get(`http://localhost:4000/api/orders`, {
          params: { ...user },
        });
        if (!data.length) {
          toast({
            title: "Sorry someting wrong.",
            status: "error",
            duration: 4000,
            isClosable: true,
            position: "top",
            variant: "subtle",
          });
          setOrdersList([]);
        } else {
          setOrdersList(data);
        }
      } catch (error) {}
    }
  };

  return (
    <form onKeyDown={getOrdersHistory}>
      <VStack
        spacing={6}
        align="center"
        justify="center"
        w={[250, 400, 500]}
        h="100%"
        mx="auto"
      >
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            variant="outline"
            focusBorderColor="teal.400"
            type="email"
            name="email"
            onChange={(e) => (email = e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="phone">Phone</FormLabel>
          <Input
            variant="outline"
            focusBorderColor="teal.400"
            type="text"
            name="phone"
            onChange={(e) => (phone = e.target.value)}
          />
        </FormControl>
      </VStack>
    </form>
  );
};

export default HistoryForm;
