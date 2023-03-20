import PropTypes from 'prop-types';
import { SectionContainer, Title, Wrapper } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <Wrapper>
        {title && <Title>{title}</Title>}
        {children}
      </Wrapper>
    </SectionContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
