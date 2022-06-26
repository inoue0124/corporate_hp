import { Box, BoxProps, keyframes, HStack } from '@chakra-ui/react';
import { FC } from 'react';

const WaveForm: FC<BoxProps> = (props) => {
  const waving = keyframes`
    0% {
      bottom: 0;
      width: 0px;
      background: #ADE2FF;
    }
    25% {
      width: 150px;
    }
    50% {
      width: 20px;
    }
    75% {
      width: 200px;
    }
    100% {
      bottom: 100%;
      width: 0px;
      background: #F9B4FF;
    }
  `;
  const animation = (startTime: Number) =>
    `${waving} infinite 20s ${startTime}s linear`;

  return (
    <HStack
      zIndex="-1"
      w={'200px'}
      h={'100%'}
      position="relative"
      justify={'center'}
      {...props}
    >
      {[...Array(21).keys()].map((i) => (
        <Box
          h={'2%'}
          borderRadius="2px"
          position="absolute"
          animation={animation(-i)}
        ></Box>
      ))}
    </HStack>
  );
};

export default WaveForm;
