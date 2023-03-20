import styled from '@emotion/styled';
import { colors } from 'constants';
import { transition } from 'helpers';

export const Label = styled.label`
  display: block;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 300;
`;

export const InputStyled = styled.input`
  width: 100%;
  font-size: 20px;
  border: none;
  padding: 12px 16px;
  outline: none;
  background-color: inherit;
  box-shadow: inset 4px 6px 13px 0px rgb(84, 65, 171);
  color: ${colors.theme2};
  font-weight: 300;
  border-radius: 5px;
  background: linear-gradient(120deg, rgb(45, 37, 79) 0%, rgb(30, 20, 76) 100%);
  font-family: 'Gruppo', sans-serif;
  ${transition('box-shadow')};

  &:focus {
    box-shadow: inset 2px 3px 17px 0px rgba(0, 210, 196, 0.758);
  }
`;
