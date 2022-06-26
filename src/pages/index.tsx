import Header from '@/components/header';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';

export default function Home() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Header />
        <main></main>
      </ChakraProvider>
    </>
  );
}
