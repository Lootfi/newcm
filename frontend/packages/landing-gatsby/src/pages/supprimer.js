import React from 'react';
import Template from './template-app';
import Container from '../../../common/src/components/UI/Container';
import { ConfidWrapper } from '../styles/confidentiality.style';
import SEO from '../components/seo';
import Footer from '../containers/SaasClassic/Footer';

export default function Supprimer() {
  React.useEffect(() => {
    var r,
      d = document,
      gt = d.getElementById,
      cr = d.createElement,
      tg = d.getElementsByTagName,
      id = 'aidaform-embed';
    if (!gt.call(d, id)) {
      r = cr.call(d, 'script');
      r.id = id;
      r.src = 'https://embed.aidaform.com/embed.js';
      (d.head || tg.call(d, 'head')[0]).appendChild(r);
    }
  }, []);
  return (
    <Template>
      <SEO title="Supprimer un Contact - ContactMajor" />
      <ConfidWrapper>
        <Container>
          <div
            data-aidaform-widget="form-2019-12"
            data-url="https://greatsong.aidaform.com/majorc-supprimer-un-contact"
            data-width="100%"
            data-height="500px"
            data-do-resize
          ></div>
        </Container>
      </ConfidWrapper>
      <Footer />
    </Template>
  );
}
