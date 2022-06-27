import { Box, BoxProps, keyframes } from '@chakra-ui/react';
import { FC } from 'react';

const Ellipse: FC<BoxProps> = (props) => {
  const updown = keyframes`
    0% {
      transform: rotate(28deg) translateY(0px);
    }
    50% {
      transform: rotate(8deg) translateY(-40px);
    }
    100% {
      transform: rotate(28deg) translateY(0px);
    }
  `;
  const animation = `${updown} infinite 4s ease-in-out`;

  return (
    <>
      <Box
        borderRadius="50%"
        bg="linear-gradient(180deg, #F9B4FF 0%, #ADE2FF 100%)"
        zIndex="-1"
        animation={animation}
        {...props}
      ></Box>
    </>
  );
};

export default Ellipse;
