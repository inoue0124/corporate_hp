import { Box, BoxProps, Center, Text } from '@chakra-ui/react';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { FC } from 'react';

type Props = BoxProps & {
  image: IGatsbyImageData;
  name: string;
  description: string;
};

const Service: FC<Props> = (props) => {
  return (
    <Center {...props}>
      <Box maxW={400}>
        <GatsbyImage image={getImage(props.image)!} alt={props.name} />
        <Text color="grey.900" fontSize={24} mt={4} mb={2}>
          {props.name}
        </Text>
        <Text color="grey.900" fontSize={14}>
          {props.description}
        </Text>
      </Box>
    </Center>
  );
};

export default Service;
