import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Box from '../../../../../common/src/components/Box';
import Text from '../../../../../common/src/components/Text';
import Heading from '../../../../../common/src/components/Heading';
import Logo from '../../../../../common/src/components/UIElements/Logo';
import Container from '../../../../../common/src/components/UI/Container';
import FooterWrapper, { List, ListItem } from './footer.style';
import LogoImage from '../../../../../common/src/assets/image/saasClassic/logo-white.png';
import { LightboxContext } from '../../../../../common/src/contexts/LightboxContext';
import Lock from 'common/src/assets/image/lock.png';
const Footer = ({
  row,
  col,
  colOne,
  colTwo,
  titleStyle,
  logoStyle,
  textStyle,
  bottomRow
}) => {
  const { handleLightbox } = React.useContext(LightboxContext);
  const Data = useStaticQuery(graphql`
    query {
      saasClassicJson {
        FOOTER_WIDGET {
          title
          menuItems {
            text
            url
          }
        }
      }
    }
  `);

  return (
    <FooterWrapper>
      <Container className="footer_container">
        <Box className="row" {...row}>
          <Box {...colOne}>
            <Logo
              href="#"
              logoSrc={LogoImage}
              title="Hosting"
              logoStyle={logoStyle}
            />
            <br />
            <br />
            <Text content="support@contactmajor.com" {...textStyle} />
            <Text content="+33 183 620 250" {...textStyle} />
          </Box>
          {/* End of footer logo column */}
          <Box {...colTwo}>
            {Data.saasClassicJson.FOOTER_WIDGET.map((widget, index) => (
              <Box className="col" {...col} key={`footer-widget-${index}`}>
                <Heading content={widget.title} {...titleStyle} />
                <List>
                  {widget.menuItems.map((item, index) => (
                    <ListItem key={`footer-list-item-${index}`}>
                      {item.url === '#' ? (
                        <a
                          href="#"
                          onClick={() =>
                            handleLightbox(
                              item.text === 'Inscription'
                                ? 'signup'
                                : 'connexion'
                            )
                          }
                          className="ListItem"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <a href={item.url} className="ListItem">
                          {item.text}
                        </a>
                      )}
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Box>
          {/* End of footer List column */}
        </Box>
      </Container>
      <Container>
        <Box {...bottomRow} className="bottomRow">
          <img href="#" src={LogoImage} style={logoStyle} />
          <Box {...bottomRow}>
            <p>© 2020 ContactMajor</p>
            <div style={{ display: 'flex', alignItems: 'baseline' }}>
              <img
                width="20px"
                style={{ marginRight: '3px' }}
                src={Lock}
                alt="Lock"
              />
              <p>Secured with SSL</p>
            </div>
          </Box>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  bottomRow: PropTypes.object
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  ListItem: {
    color: 'red'
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
  },
  // Footer col one style
  colOne: {
    width: [1, '35%', '35%', '23%'],
    mt: [0, '13px'],
    mb: ['30px', 0],
    pl: ['15px', 0],
    pr: ['15px', '15px', 0]
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '65%', '65%', '77%'],
    flexBox: true,
    flexWrap: 'wrap'
  },
  // Footer col default style
  col: {
    width: ['50%', '50%', '50%', '25%'],
    pl: '15px',
    pr: '15px',
    mb: '30px'
  },
  // widget title default style
  titleStyle: {
    color: '#fff',
    fontSize: '16px',
    fontWeight: '700',
    mb: '30px'
  },
  // Default logo size
  logoStyle: {
    width: ['180px', '150px'],
    mb: '15px'
  },
  // widget text default style
  textStyle: {
    color: '#eee',
    fontSize: '16px',
    mb: '10px'
  },
  bottomRow: {
    display: 'inline-flex',
    alignItems: 'center'
  }
};

export default Footer;
