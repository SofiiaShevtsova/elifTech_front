import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  useColorMode,
  Button,
} from '@chakra-ui/react';

const ToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Button
                    my='auto'
        colorScheme="teal"
        onClick={toggleColorMode}
      >
        {colorMode === 'light' ? (
          <MoonIcon boxSize={6} />
        ) : (
          <SunIcon boxSize={6} />
        )}
      </Button>
    </>
  );
}

export default ToggleTheme
