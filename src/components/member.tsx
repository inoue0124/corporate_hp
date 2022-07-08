import { Box, BoxProps, Center, HStack, Spacer, Text } from '@chakra-ui/react';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { FC } from 'react';

type Props = BoxProps & {
  image: IGatsbyImageData;
  title: string;
  name: string;
  nameEn: string;
  profile: JSX.Element;
  isImageRight: Boolean;
};

const Member: FC<Props> = (props) => {
  const image = (
    <Box
      maxW={400}
      mr={props.isImageRight ? 0 : 8}
      borderRadius="16"
      overflow="hidden"
    >
      <GatsbyImage image={getImage(props.image)!} alt={props.title} />
    </Box>
  );

  const profile = (
    <Box mr={props.isImageRight ? 8 : 0}>
      <Text color="grey.900" fontSize={12} mb={4}>
        {props.title}
      </Text>

      <HStack mb={8}>
        <Text color="grey.900" fontSize={36}>
          {props.name}
        </Text>
        <Spacer />
        <Text color="grey.900" fontSize={36}>
          {props.nameEn}
        </Text>
      </HStack>

      <Text color="grey.900" fontSize={14}>
        {props.profile}
      </Text>
    </Box>
  );

  return (
    <Center {...props}>
      {props.isImageRight ? (
        <>
          {profile}
          {image}
        </>
      ) : (
        <>
          {image}
          {profile}
        </>
      )}
    </Center>
  );
};

export default Member;
