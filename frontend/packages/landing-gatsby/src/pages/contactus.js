import React from 'react';
import Template from './template-app';
import Container from '../../../common/src/components/UI/Container';
import { ConfidWrapper } from '../styles/confidentiality.style';
import SEO from '../components/seo';
import Footer from '../containers/SaasClassic/Footer';

export default function Contactus() {
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
      <SEO title="Contactez nous - ContactMajor" />
      <ConfidWrapper>
        <div className="container mt-100 mt-60">
          <div className="row">
            <div className="col-md-4">
              <div className="card contact-detail text-center border-0">
                <div className="card-body p-0">
                  <div className="icon">
                    <img
                      src="images/icon/bitcoin.svg"
                      className="avatar avatar-small"
                      alt
                    />
                  </div>
                  <div className="content mt-3">
                    <h4 className="title font-weight-bold">Phone</h4>
                    <p className="text-muted">
                      Start working with Landrick that can provide everything
                    </p>
                    <a href="tel:+152534-468-854" className="text-primary">
                      +152 534-468-854
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="card contact-detail text-center border-0">
                <div className="card-body p-0">
                  <div className="icon">
                    <img
                      src="images/icon/Email.svg"
                      className="avatar avatar-small"
                      alt
                    />
                  </div>
                  <div className="content mt-3">
                    <h4 className="title font-weight-bold">Email</h4>
                    <p className="text-muted">
                      Start working with Landrick that can provide everything
                    </p>
                    <a
                      href="mailto:contact@example.com"
                      className="text-primary"
                    >
                      contact@example.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="card contact-detail text-center border-0">
                <div className="card-body p-0">
                  <div className="icon">
                    <img
                      src="images/icon/location.svg"
                      className="avatar avatar-small"
                      alt
                    />
                  </div>
                  <div className="content mt-3">
                    <h4 className="title font-weight-bold">Location</h4>
                    <p className="text-muted">
                      C/54 Northwest Freeway, Suite 558, <br />
                      Houston, USA 485
                    </p>
                    <a
                      href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                      className="video-play-icon h6 text-primary"
                    >
                      View on Google map
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        ;
        <Container>
          <div
            data-aidaform-widget="form-2019-12"
            data-url="https://contactmajor.aidaform.com/contact"
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
