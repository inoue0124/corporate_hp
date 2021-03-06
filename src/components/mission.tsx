import { Box, BoxProps, Center, Text } from '@chakra-ui/react';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { FC } from 'react';

type Props = BoxProps & {
  image: IGatsbyImageData;
  title: string;
  description: JSX.Element;
};

const Mission: FC<Props> = (props) => {
  return (
    <Center {...props}>
      <Box maxW={400} mr={16}>
        <GatsbyImage image={getImage(props.image)!} alt={props.title} />
      </Box>

      <Box maxW={350}>
        <Text color="grey.900" fontSize={24}>
          {props.title}
        </Text>
        <Text color="grey.900" fontSize={14}>
          {props.description}
        </Text>
      </Box>
    </Center>
  );
};

export default Mission;
