import { Box, BoxProps, Text } from '@chakra-ui/react';
import { FC } from 'react';

type Props = BoxProps & {
  date: string;
  title: string;
};

const News: FC<Props> = (props) => {
  return (
    <Box {...props}>
      <Text color="grey.500" fontSize={12}>
        {props.date}
      </Text>
      <Text color="grey.900" fontSize={16} mb={2}>
        {props.title}
      </Text>
    </Box>
  );
};

export default News;
