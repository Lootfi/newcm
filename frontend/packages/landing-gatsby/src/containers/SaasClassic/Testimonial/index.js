import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../../../../common/src/components/Box';
import Text from '../../../../../common/src/components/Text';
import Heading from '../../../../../common/src/components/Heading';
import Container from '../../../../../common/src/components/UI/Container';

const TestimonialSection = ({
  sectionWrapper,
  secTitleWrapper,
  secText,
  secHeading
}) => {
  return (
    <Box {...sectionWrapper} as="section" id="testimonial_section">
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content="TÉMOIGNAGES" />
          <Heading
            {...secHeading}
            content="Ils ont utilisé ContactMajor pour avoir les bons contacts"
          />
        </Box>
        <div id="ndrsl-5f21d83c3c39c210ca8b9281" className="ndrsl-widget"></div>
      </Container>
    </Box>
  );
};

TestimonialSection.propTypes = {
  sectionHeader: PropTypes.object
};

TestimonialSection.defaultProps = {
  sectionWrapper: {
    pt: ['80px', '80px', '90px', '90px']
  },
  secTitleWrapper: {
    mb: ['40px', '60px']
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#ff4362',
    mb: '12px'
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px', '36px', '36px'],
    fontWeight: '700',
    color: '#fff',
    // color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    ml: 'auto',
    mr: 'auto',
    lineHeight: '1.12',
    width: '500px',
    maxWidth: '100%'
  }
};

export default TestimonialSection;
