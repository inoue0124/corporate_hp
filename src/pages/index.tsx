import Ellipse from '@/components/ellipse';
import Header from '@/components/header';
import Mission from '@/components/mission';
import WaveForm from '@/components/waveform';
import {
  Box,
  Center,
  ChakraProvider,
  Fade,
  HStack,
  Spacer,
  Text,
} from '@chakra-ui/react';
import theme from '../theme';

export default function Home() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Center>
          <Header w={'1000px'} />
        </Center>

        <main>
          <Ellipse
            w="484px"
            h="655.68px"
            position="absolute"
            left="-100px"
            top="-200px"
          />

          <Box as={'section'} pb={36}>
            <HStack h={'70vh'} w={'1000px'} m={'auto'}>
              <Text color="grey.900" fontSize={36}>
                ワクワクする未来を創る人材を
                <br />
                キャリーする
              </Text>
              <Spacer />
              <WaveForm h={'80%'} />
            </HStack>
            <Mission m={'auto'} mt={10} />
          </Box>

          <Box as={'section'} bg={'#F5F5F5'} py={36} position="relative">
            <Ellipse
              w="250px"
              h="300px"
              position="absolute"
              right={100}
              top={-20}
              zIndex={1}
            />
          </Box>
        </main>
      </ChakraProvider>
    </>
  );
}
