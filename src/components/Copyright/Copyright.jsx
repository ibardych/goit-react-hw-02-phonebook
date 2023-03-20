import PropTypes from 'prop-types';
import { CopyrightStyled } from './Copyright.styled';

const Copyright = ({ message }) => {
  return <CopyrightStyled>{message}</CopyrightStyled>;
};

Copyright.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Copyright;
