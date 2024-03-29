import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-icons-kit';
import Fade from 'react-reveal/Fade';
import { openModal, closeModal } from '@redq/reuse-modal';
import Box from '../../../../../common/src/components/Box';
import Text from '../../../../../common/src/components/Text';
import Heading from '../../../../../common/src/components/Heading';
import Button from '../../../../../common/src/components/Button';
import Image from '../../../../../common/src/components/Image';
import Container from '../../../../../common/src/components/UI/Container';
import TiltShape from '../TiltShape';
import {
  BannerWrapper,
  DiscountWrapper,
  DiscountLabel,
  VideoModal,
  PlayButton,
  VideoWrapper
} from './banner.style';
import BannerImage from '../../../../../common/src/assets/image/saasClassic/banner-image.jpg';
import { play } from 'react-icons-kit/entypo/play';
import { LightboxContext } from '../../../../../common/src/contexts/LightboxContext';

// close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const ModalContent = () => (
  <VideoWrapper>
    <iframe
      allow="fullscreen; picture-in-picture"
      allowfullscreen
      src={
        'https://alugha.com/embed/web-player?color=%23fe4553&alugha=0&v=6d15e5be-d8c8-11ea-9674-5fa2dfdf0c4e'
      }
    ></iframe>
  </VideoWrapper>
);

const BannerSection = ({
  row,
  contentWrapper,
  discountAmount,
  discountText,
  title,
  description,
  imageWrapper,
  buttonWrapper,
  button,
  fillButton
}) => {
  // modal handler
  const handleVideoModal = () => {
    openModal({
      config: {
        className: 'video-modal',
        disableDragging: true,
        width: '100%',
        height: '100%'
      },
      component: ModalContent,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true
    });
  };

  const { handleLightbox } = React.useContext(LightboxContext);

  React.useEffect(() => {
    if (window.location.hash.match('#access')) handleLightbox('signup');
    else if (window.location.hash.match('#video')) handleVideoModal();
  }, []);

  return (
    <BannerWrapper id="banner_section">
      <TiltShape className="banner-shape" />
      <Container>
        <Box {...row}>
          <Box {...contentWrapper}>
            {/* <DiscountWrapper>
              <DiscountLabel>
                <Text {...discountAmount} content="25% Save" />
                <Text
                  {...discountText}
                  content="for first month trail version"
                />
              </DiscountLabel>
            </DiscountWrapper> */}
            <Heading
              {...title}
              content="Accès Illimité aux contacts de l'industrie musicale"
            />
            <Text
              {...description}
              content="Accès aux contacts de l'industrie musicale et les médias musique pour avoir les bonnes connexions pour booster votre carrière."
            />
            <Box {...buttonWrapper}>
              <a href="#access">
                <Button
                  {...fillButton}
                  title="ACCÉDEZ MAINTENANT"
                  onClick={() => handleLightbox('signup')}
                />
              </a>
            </Box>
          </Box>
          <Box {...imageWrapper}>
            <Fade bottom>
              <VideoModal>
                <Image src={BannerImage} alt="banner image" />
                <PlayButton tabIndex="0" onClick={handleVideoModal}>
                  <Icon icon={play} size={40} />
                </PlayButton>
              </VideoModal>
            </Fade>
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  row: PropTypes.object,
  contentWrapper: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  imageWrapper: PropTypes.object,
  buttonWrapper: PropTypes.object,
  button: PropTypes.object,
  fillButton: PropTypes.object
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentWrapper: {
    width: ['100%', '100%', '80%', '55%', '50%'],
    mb: '40px'
  },
  title: {
    fontSize: ['24px', '32px', '40px', '42px', '46px'],
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px', '25px', '25px', '25px'],
    lineHeight: '1.2',
    textAlign: 'center'
  },
  description: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#fff',
    lineHeight: '1.75',
    mb: '0',
    textAlign: 'center'
  },
  discountAmount: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '700',
    color: '#fff',
    mb: 0,
    as: 'span',
    mr: '0.4em'
  },
  discountText: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '400',
    color: '#fff',
    mb: 0,
    as: 'span'
  },
  fillButton: {
    type: 'button',
    fontSize: ['13px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    colors: 'secondaryWithBg',
    minWidth: ['auto', '150px'],
    height: ['40px', '46px'],
    minHeight: 'auto'
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: 'center',
    mt: '35px'
  },
  button: {
    type: 'button',
    fontSize: ['13px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    color: '#fff',
    colors: 'secondary',
    height: ['40px', '46px'],
    minHeight: 'auto'
  }
};

export default BannerSection;
