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
  VStack,
} from '@chakra-ui/react';
import theme from '../theme';
import { useInView } from 'react-intersection-observer';
import Service from '@/components/service';
import { graphql, PageProps } from 'gatsby';
import Member from '@/components/member';
import News from '@/components/news';
import CompanyOverview from '@/components/companyOverview';
import Footer from '@/components/footer';
import { FC } from 'react';

const Home: FC<PageProps<GatsbyTypes.HomeQuery>> = ({ data }) => {
  const { ref: missionRef, inView: missionInView } = useInView({
    rootMargin: `-100px`,
    triggerOnce: true,
  });
  const { ref: serviceRef, inView: serviceInView } = useInView({
    rootMargin: `-300px`,
    triggerOnce: true,
  });
  const { ref: memberRef, inView: memberInView } = useInView({
    rootMargin: `-200px`,
    triggerOnce: true,
  });
  const { ref: newsRef, inView: newsInView } = useInView({
    rootMargin: `-300px`,
    triggerOnce: true,
  });
  const { ref: companyRef, inView: companyInView } = useInView({
    rootMargin: `-200px`,
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
            isReverse={false}
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
                style={{ animationDelay: `0.2s`, animationDuration: `1s` }}
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

          <Box as="section" ref={missionRef} pb={20}>
            {missionInView ? (
              <Box
                className="animate__animated animate__fadeIn"
                style={{ animationDelay: `0.2s` }}
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
            id="service"
            as="section"
            ref={serviceRef}
            bg="#F5F5F5"
            py={20}
            position="relative"
          >
            <Ellipse
              isReverse={false}
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
                style={{ animationDelay: `0.2s` }}
              >
                <Headline title="Service"></Headline>
                <Service
                  image={data.shadowingSaver?.childImageSharp?.gatsbyImageData!}
                  name="Shadowing Saver"
                  description="英語のスピーキング学習手法であるシャドーイングを大学等教育機関で導入するためのLMSシステム。東京大学峯松信明教授、及び神戸学院大学中西のりこ教授と連携して開発中。"
                  m="auto"
                  mt={16}
                />
              </Box>
            ) : (
              <Box h="300px" />
            )}
          </Box>

          <Box id="member" as="section" ref={memberRef} py={20}>
            {memberInView ? (
              <Box style={{ animationDelay: `0.2s` }}>
                <Headline title="Member" mb={16}></Headline>
                <Member
                  className="animate__animated animate__fadeInUp"
                  image={data.inoue?.childImageSharp?.gatsbyImageData!}
                  title="代表取締役"
                  name="井上雄介"
                  nameEn="Yusuke Inoue"
                  profile={
                    <>
                      東京大学大学院工学系研究科卒業。在学時は音声分析技術を用いた外国語学習支援に関して研究を行い国内外の学会で発表を行う。
                      <br />
                      卒業後はWeb系メガベンチャーに入社し、Web開発に関する幅広い知識を養う。在学時から語学学習に興味を持ち、自らも中国の清華大学に交換留学をして外国語を身につけた経験を持つ。
                      <br />
                      大学の研究を社会に実装し、外国語学習をより科学的にするべくキャリッジ株式会社を創業し、現在に至る。
                    </>
                  }
                  isImageRight={false}
                  m="auto"
                  maxW="1000px"
                  mb={16}
                />
                <Member
                  className="animate__animated animate__fadeInUp"
                  image={data.mizuno?.childImageSharp?.gatsbyImageData!}
                  title="取締役"
                  name="水野宏明"
                  nameEn="Hiroaki Mizuno"
                  profile={
                    <>
                      東京大学理学部情報科学科卒業。在学時は研究と並行して、ベンチャー企業でCMSの開発に従事。
                      <br />
                      卒業後、独立系SIerにてコンサルタントとして就職。当時の最も売上の高かった大手企業顧客のカスタマーサクセスを担当。数万人規模の査定のペーパーレス化プロジェクトを完遂。
                      <br />
                      その後、井上と同じWeb系メガベンチャーに入社し、広告関連のプロダクト開発を担当。井上の理念に共感し、キャリッジを共同で創業。
                      <br />
                    </>
                  }
                  isImageRight={true}
                  m="auto"
                  maxW="1000px"
                />
              </Box>
            ) : (
              <Box h="300px" />
            )}
          </Box>

          <Box
            id="news"
            as="section"
            ref={newsRef}
            bg="#F5F5F5"
            py={20}
            position="relative"
          >
            <Ellipse
              isReverse={true}
              w="384px"
              h="500.68px"
              position="absolute"
              left="-120px"
              top="-300px"
              zIndex={1}
            />
            {newsInView ? (
              <Box
                className="animate__animated animate__fadeIn"
                style={{ animationDelay: `0.2s` }}
              >
                <Headline title="News"></Headline>
                <VStack spacing={4}>
                  <News
                    date="2022.07.04"
                    title="キャリッジ株式会社を設立いたしました。"
                  />
                </VStack>
              </Box>
            ) : (
              <Box h="300px" />
            )}
          </Box>

          <Box id="company" as="section" ref={companyRef} py={20}>
            {companyInView ? (
              <Box
                className="animate__animated animate__fadeIn"
                style={{ animationDelay: `0.2s` }}
              >
                <Headline title="Company" mb={16}></Headline>
                <CompanyOverview w="1000px" />
              </Box>
            ) : (
              <Box h="300px" />
            )}
          </Box>

          <Footer />
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
    shadowingSaver: file(relativePath: { eq: "service/shadowing_saver.png" }) {
      id
      childImageSharp {
        gatsbyImageData(
          blurredOptions: { width: 100 }
          width: 600
          placeholder: BLURRED
        )
      }
    }
    inoue: file(relativePath: { eq: "member/inoue.png" }) {
      id
      childImageSharp {
        gatsbyImageData(
          blurredOptions: { width: 100 }
          width: 600
          placeholder: BLURRED
          aspectRatio: 1
        )
      }
    }
    mizuno: file(relativePath: { eq: "member/mizuno.jpg" }) {
      id
      childImageSharp {
        gatsbyImageData(
          blurredOptions: { width: 100 }
          width: 600
          placeholder: BLURRED
          aspectRatio: 1
        )
      }
    }
  }
`;

export default Home;
