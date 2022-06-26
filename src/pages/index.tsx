import Ellipse from '@/components/ellipse';
import Header from '@/components/header';
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
          <Fade in={true}>
            <Ellipse
              w="484px"
              h="655.68px"
              position="absolute"
              left="-100px"
              top="-200px"
            />
          </Fade>

          <Center as={'section'}>
            <HStack height={'70vh'} width={'1000px'}>
              <Text color="grey.900" fontSize={36}>
                ワクワクする未来を創る人材を
                <br />
                キャリーする
              </Text>
              <Spacer />
              <WaveForm height={'80%'} />
            </HStack>
          </Center>

          <Box as={'section'} position={'relative'}>
            <Fade in={true}>
              <Ellipse w="250px" h="250px" />
            </Fade>
          </Box>
        </main>
      </ChakraProvider>
    </>
  );
}
