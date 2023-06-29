import PropTypes from 'prop-types';

export const Section = ({ children, title }) => {
  return <section title={title}>{children}</section>;
};

Section.propTypes = {
  title: PropTypes.string,
};
