import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { Modal, openModal, closeModal } from '@redq/reuse-modal';
import Sticky from 'react-stickynode';
import { DrawerProvider } from '../../../common/src/contexts/DrawerContext';
import { saasClassicTheme } from '../../../common/src/theme/saasClassic';
import { ResetCSS } from '../../../common/src/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper
} from '../containers/SaasClassic/saasClassic.style';
import BannerSection from '../containers/SaasClassic/Banner';
import Navbar from '../containers/SaasClassic/Navbar';
import ServiceSection from '../containers/SaasClassic/Service';
import PartnerSection from '../containers/SaasClassic/Partner';
import TrialSection from '../containers/SaasClassic/Trial';
import FeatureSection from '../containers/SaasClassic/Feature';
import TestimonialSection from '../containers/SaasClassic/Testimonial';
import Newsletter from '../containers/SaasClassic/Newsletter';
import Footer from '../containers/SaasClassic/Footer';
import '@redq/reuse-modal/es/index.css';
import SEO from '../components/seo';
import Button from '../../../common/src/components/Button';
import Lightbox from '../../../common/src/components/Lightbox';
import { LightboxProvider } from '../../../common/src/contexts/LightboxContext';

const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

export default () => {
  const handleLighbox = () => {
    openModal({
      config: {
        className: 'lightbox',
        disableDragging: true,
        width: '100%',
        height: '100%'
      },
      component: Lightbox,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true
    });
  };

  return (
    <ThemeProvider theme={saasClassicTheme}>
      <LightboxProvider>
        <Fragment>
          <SEO title="ContactMajor" />
          <Modal />
          <ResetCSS />
          <GlobalStyle />

          <ContentWrapper>
            <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
              <DrawerProvider>
                <Navbar handleLighbox={handleLighbox} />
              </DrawerProvider>
            </Sticky>
            <BannerSection handleLighbox={handleLighbox} />
            <ServiceSection />
            {/* <FeatureSection /> */}
            <PartnerSection />
            <TestimonialSection />
            <TrialSection />
            <Newsletter />
            <Footer />
          </ContentWrapper>
        </Fragment>
      </LightboxProvider>
    </ThemeProvider>
  );
};
