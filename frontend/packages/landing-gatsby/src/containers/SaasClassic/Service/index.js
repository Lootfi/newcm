import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Box from '../../../../../common/src/components/Box';
import Text from '../../../../../common/src/components/Text';
import Heading from '../../../../../common/src/components/Heading';
import Container from '../../../../../common/src/components/UI/Container';
import SectionWrapper, { ImageSlider, ImageSlide } from './service.style';
import FeatureBlock from '../../../../../common/src/components/FeatureBlock';
import i1 from '../../../../../common/src/assets/image/1.png';
import i2 from '../../../../../common/src/assets/image/2.png';
import i3 from '../../../../../common/src/assets/image/3.png';
import i4 from '../../../../../common/src/assets/image/4.png';
import i5 from '../../../../../common/src/assets/image/5.png';
import i6 from '../../../../../common/src/assets/image/6.png';

import Logo from '../../../../../common/src/components/UIElements/Logo';

const ServiceSection = ({
  secTitleWrapper,
  secText,
  secHeading,
  Row,
  Col,
  row,
  col,
  serviceTitleStyle,
  secDes,
  FeatureItemStyle,
  iconStyle,
  contentStyle,
  featureTitle,
  featureDescription
}) => {
  const images = [i1, i2, i3, i4, i5, i6];

  const Data = useStaticQuery(graphql`
    query {
      saasClassicJson {
        SERVICE_ITEMS {
          title
          icon
        }
        FEATURES {
          title
          description
          icon
        }
        MAISONS {
          picture {
            publicURL
          }
        }
      }
    }
  `);

  return (
    <SectionWrapper id="service_section">
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content="LA BASE DE CONTACTS MUSIQUE ULTIME" />
          <Heading
            {...secHeading}
            content="+ 3.200 contacts dont vous avez besoin pour booster votre carriére"
          />
          <Text
            {...secDes}
            content="Contact direct avec les professionnels qui peuvent faire une différence dans votre carrière gràce à notre base de contacts compléte et à jour."
          />
        </Box>

        <div
          style={{
            marginBottom: '70px',
            backgroundColor: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <ImageSlider>
            <ImageSlide>
              {Data.saasClassicJson.MAISONS.map((item, index) => (
                <Logo
                  logoStyle={{ height: '70px' }}
                  href="#"
                  key={index}
                  logoSrc={item.picture.publicURL}
                  title={`maisons-image-${index}`}
                  alt={`maisons-image-${index}`}
                />
              ))}
            </ImageSlide>
            <ImageSlide>
              {Data.saasClassicJson.MAISONS.map((item, index) => (
                <Logo
                  logoStyle={{ height: '70px' }}
                  href="#"
                  key={index}
                  logoSrc={item.picture.publicURL}
                  alt={`maisons-image2-${index}`}
                  title={`maisons-image-${index}`}
                />
              ))}
            </ImageSlide>
          </ImageSlider>
        </div>

        <Box {...row}>
          {Data.saasClassicJson.FEATURES.map((item, index) => (
            <Box {...col} key={`feature-item-${index}`} className="feature_col">
              <FeatureBlock
                icon={<img src={images[index]} alt={`feature-item-${index}`} />}
                wrapperStyle={FeatureItemStyle}
                iconStyle={iconStyle}
                contentStyle={contentStyle}
                iconPosition="left"
                title={<Heading content={item.title} {...featureTitle} />}
                description={
                  <Text content={item.description} {...featureDescription} />
                }
              />
            </Box>
          ))}
        </Box>
      </Container>
    </SectionWrapper>
  );
};

ServiceSection.propTypes = {
  secTitleWrapper: PropTypes.object,
  secText: PropTypes.object,
  secHeading: PropTypes.object,
  Row: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  contentStyle: PropTypes.object,
  Col: PropTypes.object,
  serviceTitleStyle: PropTypes.object,
  secDes: PropTypes.object
};

ServiceSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: ['-30px', '-30px', '-30px', '-25px', '-30px'],
    mr: ['-30px', '-30px', '-30px', '-25px', '-45px']
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
    pl: ['30px', '30px', '30px', '25px', '45px'],
    pr: ['30px', '30px', '30px', '25px', '45px'],
    mb: ['50px', '70px']
  },
  FeatureItemStyle: {},
  iconStyle: {
    width: ['72px', '72px', '72px', '72px', '82px'],
    height: ['72px', '72px', '72px', '72px', '82px'],
    mr: '20px',
    borderRadius: ['20px', '20px', '20px', '20px', '28px'],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bg: '#ffecef',
    color: '#ff4361',
    fontSize: ['26px', '26px', '26px', '26px', '30px']
  },
  featureTitle: {
    fontSize: ['17px', '19px'],
    fontWeight: '500',
    color: '#fff',
    // color: '#0f2137',
    letterSpacing: '-0.020em',
    lineHeight: '1.5',
    mb: ['10px', '13px']
  },
  featureDescription: {
    fontSize: '15px',
    fontWeight: '400',
    color: '#5d646d',
    letterSpacing: '-0.025em',
    lineHeight: '1.88',
    mb: 0
  },
  secTitleWrapper: {
    mb: ['30px', '50px']
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#ff4362',
    mb: '12px'
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px', '36px', '36px'],
    fontWeight: '700',
    color: '#fff',
    // color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    ml: 'auto',
    mr: 'auto',
    lineHeight: '1.12',
    width: '540px',
    maxWidth: '100%'
  },
  Row: {
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
    ml: ['0', '-15px', '-20px', '-35px', '-35px'],
    mr: ['0', '-15px', '-20px', '-35px', '-35px']
  },
  Col: {
    pl: ['15px', '15px', '25x', '35px', '35px'],
    pr: ['15px', '15px', '25px', '35px', '35px'],
    mb: '40px'
  },
  serviceTitleStyle: {
    fontSize: ['15px', '15px', '15px', '16px', '17px'],
    fontWeight: '500',
    color: '#ff4361',
    mb: 0
  },
  secDes: {
    fontSize: ['14px', '15px', '16px'],
    color: '#5d646d',
    lineHeight: '1.875',
    mt: '30px',
    ml: 'auto',
    mr: 'auto',
    width: '470px',
    maxWidth: '100%',
    textAlign: 'center'
  }
};

export default ServiceSection;
