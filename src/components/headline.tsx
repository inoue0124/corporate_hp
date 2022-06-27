import { BoxProps, Center, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Helmet } from 'react-helmet';

type Props = {
  title: String;
  props?: BoxProps;
};

const Headline: FC<Props> = ({ title, props }) => {
  return (
    <Center>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Text
        bg="linear-gradient(180deg, #F9B4FF 0%, #ADE2FF 100%)"
        bgClip="text"
        fontFamily="Poppins"
        fontSize={64}
        {...props}
      >
        {title}
      </Text>
    </Center>
  );
};

export default Headline;
