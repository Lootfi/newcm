import React from 'react';
import Template from '../template-app';
import SEO from '../../components/seo';
import { ConfidWrapper } from '../../styles/confidentiality.style';
import Footer from '../../containers/SaasClassic/Footer';

export default function Suggest() {
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
      <SEO title="Suggérer un contact - ContactMajor" />
      <ConfidWrapper>
        <div
          data-aidaform-widget="form-2019-12"
          data-url="https://greatsong.aidaform.com/majorc-ajouter-un-contact"
          data-width="100%"
          data-height="500px"
          data-do-resize
        ></div>
      </ConfidWrapper>
      <Footer />
    </Template>
  );
}
