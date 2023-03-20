import styled from '@emotion/styled';
import { colors } from 'constants';
import { transition } from 'helpers';

export const Contact = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px 10px 15px;
  border-radius: 20px 10px 10px 0px;
  cursor: default;
  ${transition('box-shadow')};

  & span {
    display: flex;
    align-items: center;
  }

  & strong {
    color: ${colors.default};
    margin-left: 10px;
  }

  & span::before {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: ${colors.default};
    margin-right: 20px;
    position: relative;
    z-index: 0;
  }

  &:hover span::before {
    animation: pulsate 1s ease-out infinite;
  }

  @keyframes pulsate {
    0% {
      transform: scale(0.7);
      opacity: 1;
    }
    100% {
      transform: scale(3);
      opacity: 0;
    }
  }

  & button {
    flex-basis: 100px;
    opacity: 0;
    ${transition('transform', 'box-shadow', 'border-radius', 'opacity')};
    margin: 0;
  }

  &:hover {
    box-shadow: inset 0px 0px 20px 0px ${colors.default};

    & button {
      opacity: 1;
    }
  }
`;
