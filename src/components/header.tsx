import { Flex, Text, Grid, Spacer } from '@chakra-ui/layout';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { BoxProps } from '@chakra-ui/react';
import { FC } from 'react';
import Logo from './logo';

const Header: FC<BoxProps> = (props) => {
  return (
    <Flex color="grey.900" h="80px" alignItems="center" as="header" {...props}>
      <Logo />
      <Spacer />
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={10}
        sx={{ listStyle: `none` }}
        as="nav"
      >
        <Text
          fontSize="sm"
          as="li"
          _hover={{ textDecoration: `underline 1px` }}
        >
          <AnchorLink href="#service">サービス</AnchorLink>
        </Text>
        <Text
          fontSize="sm"
          as="li"
          _hover={{ textDecoration: `underline 1px` }}
        >
          <AnchorLink href="#member">メンバー</AnchorLink>
        </Text>
        <Text
          fontSize="sm"
          as="li"
          _hover={{ textDecoration: `underline 1px` }}
        >
          <AnchorLink href="#news">ニュース</AnchorLink>
        </Text>
        <Text
          fontSize="sm"
          as="li"
          _hover={{ textDecoration: `underline 1px` }}
        >
          <AnchorLink href="#company">会社概要</AnchorLink>
        </Text>
      </Grid>
    </Flex>
  );
};

export default Header;
