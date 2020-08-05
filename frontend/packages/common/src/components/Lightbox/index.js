import React from 'react';
import LightboxWrapper, { LightboxlSlideWrapper } from './Lightbox.style';
import GlideCarousel from '../GlideCarousel';
import GlideSlide from '../GlideCarousel/glideSlide';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import Box from '../Box';
import Text from '../Text';
import Heading from '../Heading';
import Container from '../UI/Container';

import {
  TestimonialSlideWrapper,
  TestimonialItem,
  TestimonialMeta,
  AuthorInfo,
  AuthorImage
} from '../../../../landing-gatsby/src/containers/SaasClassic/Testimonial/testimonial.style';

const Lightbox = ({ reviewTitle, review, name, designation }) => {
  const Data = useStaticQuery(graphql`
    query {
      saasClassicJson {
        TESTIMONIALS {
          name
          designation
          review
          title
          avatar {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  return (
    <LightboxWrapper>
      <div className="lightbox_container">
        <LightboxlSlideWrapper>
          <GlideCarousel
            options={{
              type: 'carousel',
              autoplay: 1000,
              perView: 2,
              gap: 30,
              animationDuration: 800
            }}
            carouselSelector="lighbox__slider"
            controls={true}
            bullets={true}
            numberOfBullets={Data.saasClassicJson.TESTIMONIALS.length}
          >
            <React.Fragment>
              {Data.saasClassicJson.TESTIMONIALS.map((item, index) => (
                <GlideSlide key={`testimonial-slide-${index}`}>
                  <TestimonialItem>
                    <Heading as="h3" content={item.title} {...reviewTitle} />
                    <Text content={item.review} {...review} />
                    <TestimonialMeta>
                      <AuthorInfo>
                        <AuthorImage>
                          <Image
                            fluid={item.avatar.childImageSharp.fluid}
                            alt={`reviewer-image-${index}`}
                          />
                        </AuthorImage>
                        <Box>
                          <Heading as="h3" content={item.name} {...name} />
                          <Text content={item.designation} {...designation} />
                        </Box>
                      </AuthorInfo>
                    </TestimonialMeta>
                  </TestimonialItem>
                </GlideSlide>
              ))}
            </React.Fragment>
          </GlideCarousel>
        </LightboxlSlideWrapper>
      </div>
    </LightboxWrapper>
  );
};

Lightbox.defaultProps = {
  reviewTitle: {
    fontSize: ['15px', '16px'],
    fontWeight: '500',
    color: '#343d48',
    lineHeight: '1.5',
    mb: '13px'
  },
  review: {
    fontSize: ['16px', '19px'],
    fontWeight: '300',
    color: '#343d48',
    lineHeight: '1.7',
    mb: 0
  },
  name: {
    fontSize: ['14px', '16px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '8px'
  },
  designation: {
    fontSize: ['12px', '14px'],
    color: '#6f7a87',
    mb: 0
  }
};

export default Lightbox;
