import React from 'react';
import SEO from '../components/seo';
import Container from '../../../common/src/components/UI/Container';
import Footer from '../containers/SaasClassic/Footer';

import { ConfidWrapper } from '../styles/confidentiality.style';
import Template from './template-app';
import BannerSection from '../containers/SaasClassic/Banner';
import FoncSection from '../containers/SaasClassic/Fonctionnement';

export default function Fonctionnement() {
  return (
    <Template>
      <SEO title={'Fonctionnement - ContactMajor'} />
      <ConfidWrapper>
        <FoncSection />
      </ConfidWrapper>
      <Footer />
    </Template>
  );
}
