import styled from '@emotion/styled';
import { transition } from 'helpers';

export const SectionContainer = styled.section`
  width: 550px;
  max-width: 100%;
  height: auto;
  background: linear-gradient(
    120deg,
    rgb(59, 49, 104) 0%,
    rgb(39, 27, 94) 100%
  );
  padding: 2px;
  border-radius: 15px;
  box-shadow: 0px 20px 30px -15px rgb(255 0 115 / 0.3);
  backdrop-filter: blur(2px);
  overflow: hidden;
  position: relative;
  display: flex;

  ${transition('height')}

  &::before {
    content: '';
    position: absolute;
    left: -50%;
    top: -50%;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, transparent, #ff0073);
    transform-origin: bottom right;
    animation: animate 6s linear infinite;
    opacity: 0;
    ${transition('opacity')};
  }

  &:hover::before {
    opacity: 1;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: linear-gradient(120deg, rgb(49, 48, 62) 0%, rgb(18, 16, 27) 100%);
  padding: 30px;
  position: relative;
  z-index: 3;
  border-radius: 13px;
`;

export const Title = styled.h2`
  font-size: 26px;
  margin-bottom: 30px;
`;
