import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../../../../common/src/components/Box';
import Text from '../../../../../common/src/components/Text';
import Heading from '../../../../../common/src/components/Heading';
import Button from '../../../../../common/src/components/Button';
import Image from '../../../../../common/src/components/Image';
import Container from '../../../../../common/src/components/UI/Container';

import SectionWrapper from './trial.style';
import VendorLogos from '../../../../../common/src/assets/image/saasClassic/try-it.png';
import { LightboxContext } from '../../../../../common/src/contexts/LightboxContext';

const TrialSection = ({
  row,
  title,
  description,
  textArea,
  imageArea,
  ImageOne,
  btnStyle,
  outlineBtnStyle,
  buttonWrapper
}) => {
  const { handleLightbox } = React.useContext(LightboxContext);

  return (
    <SectionWrapper id="trial_section">
      <Container>
        <Box {...row}>
          <Box {...imageArea}>
            <Image {...ImageOne} src={VendorLogos} alt="VendorLogos" />
          </Box>
          <Box {...textArea}>
            <Heading
              {...title}
              content="Avoir les bons contacts n'a jamais été aussi simple !"
            />
            <Text
              {...description}
              content="Nous mettons continuellement à jour notre liste de contacts musicaux avec les contacts les plus actifs, les plus récents et les plus fiables."
            />
            <Text
              {...description}
              content="Nous nous engageons à 100% en vous offrant les contacts les plus actuels et étendus de l'industrie de la musique !"
            />
            <Box {...buttonWrapper}>
              <Button
                title="ACCÉDEZ MAINTENANT"
                variant="textButton"
                onClick={() => handleLightbox('signup')}
                {...btnStyle}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </SectionWrapper>
  );
};

TrialSection.propTypes = {
  row: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  imageArea: PropTypes.object,
  ImageOne: PropTypes.object
};

TrialSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center'
  },
  textArea: {
    width: ['100%', '100%', '80%', '43%']
  },
  imageArea: {
    width: ['100%', '100%', '43%'],
    mb: ['35px', '35px', '40px', '40px'],
    flexBox: true,
    justifyContent: 'center'
  },
  title: {
    // fontSize: ['28px', '32px', '36px', '42px', '48px'],
    fontSize: ['20px', '24px', '36px', '36px'],
    fontWeight: '500',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '28px',
    textAlign: 'center',
    lineHeight: '1.25'
  },
  description: {
    fontSize: ['15px', '15px', '16px', '16px', '16px'],
    color: '#5c636c',
    lineHeight: '2.1',
    textAlign: 'center'
  },
  ImageOne: {
    ml: 'auto',
    mr: 'auto'
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: 'center'
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: ['13px', '14px'],
    fontWeight: '500',
    colors: 'secondaryWithBg',
    pl: ['15px', '30px'],
    pr: ['15px', '30px']
  },
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#0f2137',
    colors: 'secondary'
  }
};

export default TrialSection;
