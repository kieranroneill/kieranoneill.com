import { keyframes } from 'styled-components';

const RollAnimation = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

export default RollAnimation;
