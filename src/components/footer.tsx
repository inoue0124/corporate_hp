import { Text, HStack, Center, Box } from '@chakra-ui/layout';
import { BoxProps } from '@chakra-ui/react';
import { FC } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from './logo';

const Footer: FC<BoxProps> = () => {
  return (
    <Center
      as="footer"
      bg="linear-gradient(90deg, #F9B4FF 0%, #ADE2FF 100%)"
      py={12}
    >
      <Box>
        <HStack mb={4} spacing={8}>
          <Text
            fontSize="14"
            color="white"
            _hover={{ textDecoration: `underline 1px` }}
          >
            <AnchorLink href="#service">サービス</AnchorLink>
          </Text>
          <Text
            fontSize="14"
            color="white"
            _hover={{ textDecoration: `underline 1px` }}
          >
            <AnchorLink href="#member">メンバー</AnchorLink>
          </Text>
          <Text
            fontSize="14"
            color="white"
            _hover={{ textDecoration: `underline 1px` }}
          >
            <AnchorLink href="#news">ニュース</AnchorLink>
          </Text>
          <Text
            fontSize="14"
            color="white"
            _hover={{ textDecoration: `underline 1px` }}
          >
            <AnchorLink href="#company">会社概要</AnchorLink>
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
