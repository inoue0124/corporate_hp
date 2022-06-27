import { Box, BoxProps, Center, Text } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import { FC } from 'react';

const Mission: FC<BoxProps> = (props) => {
  return (
    <Center {...props}>
      <Box maxW={400} mr={16}>
        <StaticImage
          src="../images/mission.png"
          alt="mission"
          placeholder="blurred"
          quality={100}
        />
      </Box>

      <Box maxW={350}>
        <Text color="grey.900" fontSize={24}>
          全ての人に平等な教育の機会を
        </Text>
        <Text color="grey.900" fontSize={14}>
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
          効率の良い学びの場を提供することで すべての人がポテンシャルを発揮し
          時代の
        </Text>
      </Box>
    </Center>
  );
};

export default Mission;
