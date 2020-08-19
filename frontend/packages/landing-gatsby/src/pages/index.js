import React from 'react';
import SEO from '../components/seo';
import { ContentWrapper } from '../containers/SaasClassic/saasClassic.style';
import BannerSection from '../containers/SaasClassic/Banner';
import ServiceSection from '../containers/SaasClassic/Service';
import PartnerSection from '../containers/SaasClassic/Partner';
import TrialSection from '../containers/SaasClassic/Trial';
import TestimonialSection from '../containers/SaasClassic/Testimonial';
import FaqSection from '../containers/SaasClassic/FAQ';
import Newsletter from '../containers/SaasClassic/Newsletter';
import Footer from '../containers/SaasClassic/Footer';
import Template from './template-app';

export default function Welcome() {
  return (
    <Template>
      <SEO title="ContactMajor" />

      <ContentWrapper>
        <BannerSection />
        <ServiceSection />
        <PartnerSection />
        <TestimonialSection />
        <TrialSection />
        <FaqSection />
        {/* <Newsletter /> */}
        <Footer />
      </ContentWrapper>
    </Template>
  );
}
