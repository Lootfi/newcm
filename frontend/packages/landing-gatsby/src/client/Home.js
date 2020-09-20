import React from 'react';
import SEO from '../components/seo';
import { ClientHomeWrapper } from '../styles/confidentiality.style';
import Heading from 'common/src/components/Heading';

export default function Home() {
  React.useEffect(() => {
    setTimeout(() => {
      window.location = 'https://access.contactmajor.com/login';
    }, 4000);
  }, []);
  return (
    <h1>
      <SEO title="Home" />
      <ClientHomeWrapper>
        <Heading
          mb={'40px'}
          color="#ff4362"
          content="Merci pour votre Inscription"
          fontSize="18px"
        />

        <h3>
          Vous serez bientôt redirigé vers{' '}
          <a href="https://access.contactmajor.com/login">
            le site web principal
          </a>
        </h3>
      </ClientHomeWrapper>
    </h1>
  );
}
