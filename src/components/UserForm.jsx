import {
  Button,
  Input,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

const UserForm = () => {
  return (
    <>
      <VStack spacing={6} align="flex-start" w={[250, 400, 600]} mx="auto">
        <FormControl>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            variant="outline"
            focusBorderColor="teal.400"
            type="text"
            name="name"
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            variant="outline"
            focusBorderColor="teal.400"
            type="email"
            name="email"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="phone">Phone</FormLabel>
          <Input
            variant="outline"
            focusBorderColor="teal.400"
            type="text"
            name="phone"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="address">Address</FormLabel>
          <Input
            variant="outline"
            focusBorderColor="teal.400"
            type="text"
            name="address"
          />
        </FormControl>
      </VStack>
    </>
  );
};

export default UserForm;
