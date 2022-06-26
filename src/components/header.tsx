import { Box, Flex, Text, Divider, Grid, Spacer } from '@chakra-ui/layout';
import Logo from './logo';

const Header = () => {
  return (
    <Flex color="grey.900" h={'80px'} alignItems="center" as={'header'}>
      <Logo />
      <Spacer />
      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={10}
        sx={{ listStyle: 'none' }}
        as={'nav'}
      >
        <Text
          fontSize="sm"
          as={'li'}
          _hover={{ textDecoration: 'underline 1px' }}
        >
          サービス
        </Text>
        <Text
          fontSize="sm"
          as={'li'}
          _hover={{ textDecoration: 'underline 1px' }}
        >
          メンバー
        </Text>
        <Text
          fontSize="sm"
          as={'li'}
          _hover={{ textDecoration: 'underline 1px' }}
        >
          ニュース
        </Text>
        <Text
          fontSize="sm"
          as={'li'}
          _hover={{ textDecoration: 'underline 1px' }}
        >
          会社概要
        </Text>
        <Text
          fontSize="sm"
          as={'li'}
          _hover={{ textDecoration: 'underline 1px' }}
        >
          お問合せ
        </Text>
      </Grid>
    </Flex>
  );
};

export default Header;
