import { Text, HStack, Center, Box } from '@chakra-ui/layout';
import { BoxProps } from '@chakra-ui/react';
import { FC } from 'react';
import Logo from './logo';

const Footer: FC<BoxProps> = (props) => {
  return (
    <Center
      as="footer"
      bg="linear-gradient(90deg, #F9B4FF 0%, #ADE2FF 100%)"
      py={12}
    >
      <Box>
        <HStack mb={4}>
          <Text
            fontSize="14"
            color="white"
            _hover={{ textDecoration: `underline 1px` }}
          >
            サービス
          </Text>
          <Text
            fontSize="14"
            color="white"
            _hover={{ textDecoration: `underline 1px` }}
          >
            メンバー
          </Text>
          <Text
            fontSize="14"
            color="white"
            _hover={{ textDecoration: `underline 1px` }}
          >
            ニュース
          </Text>
          <Text
            fontSize="14"
            color="white"
            _hover={{ textDecoration: `underline 1px` }}
          >
            会社概要
          </Text>
        </HStack>
        <Center>
          <Logo isWhite={true} />
        </Center>
      </Box>
    </Center>
  );
};

export default Footer;
