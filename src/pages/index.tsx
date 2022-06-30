import Ellipse from '@/components/ellipse';
import Header from '@/components/header';
import Headline from '@/components/headline';
import Mission from '@/components/mission';
import WaveForm from '@/components/waveform';
import {
  Box,
  Center,
  ChakraProvider,
  HStack,
  Spacer,
  Text,
} from '@chakra-ui/react';
import theme from '../theme';
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import Service from '@/components/service';
import { graphql, PageProps } from 'gatsby';

const Home: React.FC<PageProps<GatsbyTypes.HomeQuery>> = ({ data }) => {
  const { ref: missionRef, inView: missionInView } = useInView({
    rootMargin: '-100px',
    triggerOnce: true,
  });

  const { ref: serviceRef, inView: serviceInView } = useInView({
    rootMargin: '-100px',
    triggerOnce: true,
  });

  return (
    <>
      <ChakraProvider theme={theme}>
        <Center>
          <Header w="1000px" position="absolute" top={0} />
        </Center>

        <main>
          <Ellipse
            w="484px"
            h="655.68px"
            position="absolute"
            left="-100px"
            top="-200px"
          />

          <Box as="section">
            <HStack h="100vh" w="1000px" m="auto">
              <Text
                className="animate__animated animate__fadeIn"
                style={{ animationDelay: '0.2s', animationDuration: '1s' }}
                color="grey.900"
                fontSize={36}
              >
                ワクワクする未来を創る人材を
                <br />
                キャリーする
              </Text>
              <Spacer />
              <WaveForm h="60vh" />
            </HStack>
          </Box>

          <Box as="section" ref={missionRef} pb={36}>
            {missionInView ? (
              <Box
                className="animate__animated animate__fadeIn"
                style={{ animationDelay: '0.2s' }}
              >
                <Headline title="Mission"></Headline>
                <Mission
                  image={data.mission?.childImageSharp?.gatsbyImageData!}
                  title="全ての人に平等な教育の機会を"
                  description={
                    <>
                      キャリッジは研究室の最新テクノロジーを社会に実装し、
                      効率の良い学びの場を提供することで
                      誰もがポテンシャルを発揮できる世の中を目指します。
                      <br />
                      <br />
                      テクノロジー志向かつデータドリブンに変えていきます。
                      アカデミックとビジネスの架け橋となり、
                      教育をテクノロジー志向かつデータドリブンに変えていきます。
                      <br />
                      <br />
                      効率の良い学びの場を提供することで
                      すべての人がポテンシャルを発揮し 時代の
                    </>
                  }
                  m="auto"
                  mt={10}
                />
              </Box>
            ) : (
              <Box h="300px" />
            )}
          </Box>

          <Box
            as="section"
            ref={serviceRef}
            bg="#F5F5F5"
            py={36}
            position="relative"
          >
            <Ellipse
              w="250px"
              h="250px"
              position="absolute"
              right={100}
              top={-20}
              zIndex={1}
            />
            {serviceInView ? (
              <Box
                className="animate__animated animate__fadeIn"
                style={{ animationDelay: '0.2s' }}
              >
                <Headline title="Service"></Headline>
                <Service
                  image={data.service1?.childImageSharp?.gatsbyImageData!}
                  name="Shadowing Saver"
                  description="英語のスピーキング学習手法であるシャドーイングを大学等教育機関で導入するためのLMSシステム。東京大学峯松信明教授、及び神戸学院大学中西のりこ教授と連携して開発。"
                  m="auto"
                  mt={16}
                />
              </Box>
            ) : (
              <Box> </Box>
            )}
          </Box>
        </main>
      </ChakraProvider>
    </>
  );
};

export const query = graphql`
  query Home {
    mission: file(relativePath: { eq: "mission.png" }) {
      childImageSharp {
        gatsbyImageData(
          blurredOptions: { width: 100 }
          width: 600
          placeholder: BLURRED
        )
      }
    }
    service1: file(relativePath: { eq: "service/shadowing_saver.png" }) {
      id
      childImageSharp {
        gatsbyImageData(
          blurredOptions: { width: 100 }
          width: 600
          placeholder: BLURRED
        )
      }
    }
  }
`;

export default Home;
