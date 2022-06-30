import { Box, BoxProps, keyframes } from '@chakra-ui/react';
import { FC } from 'react';

type Props = BoxProps & {
  isReverse: boolean;
};

const Ellipse: FC<Props> = (props) => {
  const updown = keyframes`
    0% {
      transform: rotate(
        ${props.isReverse ? `-28deg` : `28deg`}
      ) translateY(0px);
    }
    50% {
      transform: rotate(
        ${props.isReverse ? `-8deg` : `8deg`}
      ) translateY(-40px);
    }
    100% {
      transform: rotate(
        ${props.isReverse ? `-28deg` : `28deg`}
      ) translateY(0px);
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
