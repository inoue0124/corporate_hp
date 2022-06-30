import { Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Helmet } from 'react-helmet';

type Props = {
  isWhite?: boolean;
};

const Logo: FC<Props> = ({ isWhite = false }) => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=KoHo&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Text
        color={isWhite ? `white` : `grey.900`}
        fontSize={24}
        fontFamily="KoHo"
        fontWeight="bold"
      >
        Carriage inc.
      </Text>
    </>
  );
};

export default Logo;
