import React from 'react';
import Template from './template-app';
import { ConfidWrapper } from '../styles/confidentiality.style';
import Container from 'common/src/components/UI/Container';
import SEO from '../components/seo';
import PricingSection from '../containers/SaasClassic/Pricing';
export default function Prix() {
  return (
    <Template>
      <SEO title="Prix - ContactMajor" />
      <PricingSection />
    </Template>
  );
}
