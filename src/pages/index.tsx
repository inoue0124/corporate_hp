import Ellipse from '@/components/ellipse';
import Header from '@/components/header';
import { ChakraProvider, Fade, keyframes } from '@chakra-ui/react';
import theme from '../theme';

export default function Home() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Header />
        <main>
          <Fade in={true}>
            <Ellipse
              w="484px"
              h="655.68px"
              position="absolute"
              left="-100px"
              top="-200px"
            />
          </Fade>
          <Fade in={true}>
            <Ellipse w="250px" h="250px" />
          </Fade>
        </main>
      </ChakraProvider>
    </>
  );
}
