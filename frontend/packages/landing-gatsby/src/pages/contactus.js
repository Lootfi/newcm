import React from 'react';
import Template from './template-app';
import Container from '../../../common/src/components/UI/Container';
import { ContactWrapper } from '../styles/contactus.style';
import SEO from '../components/seo';
import Footer from '../containers/SaasClassic/Footer';

import Icon from 'react-icons-kit';
import { phone } from 'react-icons-kit/fa/phone';
import { mail } from 'react-icons-kit/feather/mail';
import { ic_location_on } from 'react-icons-kit/md/ic_location_on';
import Button from 'common/src/components/Button';
import { openModal, closeModal } from '@redq/reuse-modal';
import Heading from 'common/src/components/Heading';
// close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const ModalContent = () => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.408650168326!2d114.16553511455666!3d22.300379748528275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400ed2b62289b%3A0x7f9585fe12def80e!2s33%20Canton%20Rd%2C%20Tsim%20Sha%20Tsui%2C%20Hong%20Kong!5e0!3m2!1sen!2sdz!4v1598355193636!5m2!1sen!2sdz"
    width="100%"
    height="100%"
    frameborder="0"
    style={{ border: '0' }}
    allowfullscreen=""
    aria-hidden="false"
    tabindex="0"
  ></iframe>
);

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

  const handleMapModal = () => {
    openModal({
      config: {
        className: 'map-modal',
        disableDragging: true,
        width: '100%',
        height: '100%'
      },
      component: ModalContent,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true
    });
  };

  return (
    <Template>
      <SEO title="Contactez nous - ContactMajor" />
      <ContactWrapper>
        <Heading
          textAlign="center"
          fontSize={['24px', '24px', '36px', '36px']}
          fontWeight={'700'}
          color={'#fff'}
          letterSpacing={'.025em'}
          mb={'50px'}
          ml={'auto'}
          mr={'auto'}
          width={'540px'}
          maxWidth={'100%'}
          content="Nous Contacter"
        />
        <div className="container mt-100 mt-60 infoContainer">
          <div className="row"></div>
          <div className="row">
            <div className="col-md-4">
              <div className="card contact-detail text-center border-0">
                <div className="card-body p-0">
                  <div className="icon">
                    <Icon icon={phone} size={50} />
                  </div>
                  <div className="content mt-3">
                    <h4 className="title font-weight-bold">Téléphone</h4>
                    <p className="text-muted mx-5">
                      Contactez notre support pour toutes questions :
                    </p>
                    <a href="tel:+33183620250" className="linkText">
                      +33 183 620 250
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
                    <Icon icon={mail} size={50} />
                  </div>
                  <div className="content mt-3">
                    <h4 className="title font-weight-bold">E-mail</h4>
                    <p className="text-muted mx-5">
                      Vous puvez nous écrire directement sur cet e-mail :
                    </p>
                    <a
                      href="mailto:support@contactmajor.com"
                      className="linkText"
                    >
                      support@contactmajor.com
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
                    <Icon icon={ic_location_on} size={50} />
                  </div>
                  <div className="content mt-3">
                    <h4 className="title font-weight-bold">Adresse</h4>
                    <p className="text-muted">
                      APPHOTEL LTD - 33 Canton Road <br />
                      Tsim Sha Tsui, Kowloon, Hong Kong
                    </p>
                    <a
                      className="video-play-icon h6 linkText"
                      href="#"
                      onClick={handleMapModal}
                    >
                      Voir sur Google map
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        <Container>
          <div
            data-aidaform-widget="form-2019-12"
            data-url="https://contactmajor.aidaform.com/contact"
            data-width="100%"
            data-height="500px"
            data-do-resize
          ></div>
        </Container>
      </ContactWrapper>
      <Footer />
    </Template>
  );
}
