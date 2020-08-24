import React from 'react';
import SEO from '../components/seo';
import { ConfidWrapper } from '../styles/confidentiality.style';
export default function Home() {
  return (
    <h1>
      <SEO title="Home" />
      <ConfidWrapper>
        <h1>Client Home</h1>
      </ConfidWrapper>
    </h1>
  );
}
