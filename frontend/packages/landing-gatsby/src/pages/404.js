import React from 'react';
import SEO from '../components/seo';
import ErrorSec from '../containers/Error';
import { ResetCSS } from '../../../common/src/assets/css/style';
import Template from './template-app';
import Container from 'common/src/components/UI/Container';
import { NotFoundWrapper } from '../styles/notfound.style';
import Footer from '../containers/SaasClassic/Footer';

import Icon from 'react-icons-kit';
import { home } from 'react-icons-kit/fa/home';
import { checkSquareO } from 'react-icons-kit/fa/checkSquareO';
import { Link } from 'gatsby';
const NotFoundPage = () => {
  const smtWrong = React.useRef();
  React.useEffect(() => {
    var i = 0;
    var txt = "Une erreur s'es produite";
    var speed = 100;

    function typeWriter() {
      if (i < txt.length) {
        smtWrong.current.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      } else {
        setTimeout(() => {
          smtWrong.current.innerHTML = '';
          i = 0;
          typeWriter();
        }, 800);
      }
    }
    typeWriter();
  }, []);
  return (
    <Template>
      <SEO title="404: Not found" />
      <NotFoundWrapper>
        <Container>
          <div className="content-table-cell">
            <div className="spanParent">
              <span className="animation-text">404</span>
              <span className="error">Erreur</span>
            </div>
            <h3 className="notFound">Page Non Trouvée</h3>
            <h4 ref={smtWrong} className="smtWrong"></h4>
          </div>
          <br />
          <br />
          <br />
          <div className="bottomRow">
            <Link to="/" style={{ color: 'white' }}>
              <Icon icon={home} size={20} /> Acceuil
            </Link>
            <Link to="/contactus/" style={{ color: 'white' }}>
              <Icon icon={checkSquareO} size={20} /> Nous signaler
            </Link>
          </div>
        </Container>
      </NotFoundWrapper>
      <Footer />
    </Template>
  );
};

export default NotFoundPage;
