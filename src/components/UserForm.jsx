import {
   FormControl,
   FormLabel,
   Input,
   VStack,
} from '@chakra-ui/react';

const UserForm = () => {
   return (
      <form>
         <VStack
            spacing={5}
            align="center"
            justify="center"
            w={[250, 400, 500]}
            mx="auto"
         >
            <FormControl>
               <FormLabel htmlFor="name">
                  Name
               </FormLabel>
               <Input
                  variant="outline"
                  focusBorderColor="teal.400"
                  type="text"
                  name="name"
               />
            </FormControl>

            <FormControl>
               <FormLabel htmlFor="email">
                  Email
               </FormLabel>
               <Input
                  variant="outline"
                  focusBorderColor="teal.400"
                  type="email"
                  name="email"
               />
            </FormControl>
            <FormControl>
               <FormLabel htmlFor="phone">
                  Phone
               </FormLabel>
               <Input
                  variant="outline"
                  focusBorderColor="teal.400"
                  type="text"
                  name="phone"
               />
            </FormControl>
            <FormControl>
               <FormLabel htmlFor="address">
                  Address
               </FormLabel>
               <Input
                  variant="outline"
                  focusBorderColor="teal.400"
                  type="text"
                  name="address"
               />
            </FormControl>
         </VStack>
      </form>
   );
};

export default UserForm;
