import React from 'react';
import Template from './template-app';
import { PrixWrapper } from '../styles/prix.style';
import Container from 'common/src/components/UI/Container';
import SEO from '../components/seo';
import PricingSection from '../containers/SaasClassic/Pricing';
import Footer from '../containers/SaasClassic/Footer';
export default function Prix() {
  return (
    <Template>
      <SEO title="Prix - ContactMajor" />
      <PrixWrapper>
        <PricingSection />
      </PrixWrapper>
      <Footer />
    </Template>
  );
}
