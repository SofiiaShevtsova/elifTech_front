import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Spacer,
  Spinner,
  Box,
  Center,
  Alert,
  AlertIcon,
  AlertTitle,
  Container,
} from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import ToggleTheme from "./ButtonToggleTheme";

const Loyout = () => {
  return (
    <>
      <Container h="100vh" maxW='100vw' py='10px' px='50px'>
        <Flex w='100%' justifyContent="center" mx="auto" h='10%' px='20px'>
          <Breadcrumb
            my='auto'
            spacing="50px"
            separator="|"
            fontWeight="medium"
            fontSize={{ base: "16px", md: "24px", lg: "24px" }}
          >
            <BreadcrumbItem>
              <BreadcrumbLink
                as={Link}
                to="/shops"
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                _hover={{ color: "teal" }}
                _focus={{ color: "teal" }}
              >
                Shops
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink
                as={Link}
                to="/orders"
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                _hover={{ color: "teal" }}
                _focus={{ color: "teal" }}
              >
                Shopping cart
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Spacer />
          <ToggleTheme />
        </Flex>
        <Outlet />
      </Container>
    </>
  );
};

export default Loyout;
