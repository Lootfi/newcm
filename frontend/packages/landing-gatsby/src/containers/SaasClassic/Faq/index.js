import React, { Fragment } from 'react';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon
} from 'common/src/components/Accordion';
import { Icon } from 'react-icons-kit';
import { thinDown } from 'react-icons-kit/entypo/thinDown';
import { thinRight } from 'react-icons-kit/entypo/thinRight';
import FaqSectionWrapper from './faqSection.style';
import Button from 'common/src/components/Button';
import Loader from 'common/src/components/Loader';
import axios from 'common/src/axios';

const FaqSection = ({
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  titleStyle,
  descriptionStyle,
  btnStyle
}) => {
  const [faqs, setFaqs] = React.useState([]);
  React.useEffect(() => {
    axios
      .get('front-faqs')
      .then((res) => {
        setFaqs(Object.values(res.data));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <FaqSectionWrapper id="faqSection">
      <Container>
        <Box {...sectionHeader} className="sectionHeader">
          <Text content="QUESTIONS FRÉQUENTES" {...sectionSubTitle} />
          <Heading content="Envie d'en savoir plus ?" {...sectionTitle} />
        </Box>
        <Box className="row">
          {faqs.length !== 0 ? (
            <Accordion>
              <Fragment>
                <>
                  {faqs.map((faqItem, index) => (
                    <AccordionItem key={`accordion_key-`}>
                      <Fragment>
                        <AccordionTitle>
                          <Fragment>
                            <Heading
                              content={faqItem.question}
                              {...titleStyle}
                            />
                            <IconWrapper>
                              <OpenIcon>
                                <Icon icon={thinRight} size={18} />
                              </OpenIcon>
                              <CloseIcon>
                                <Icon icon={thinDown} size={18} />
                              </CloseIcon>
                            </IconWrapper>
                          </Fragment>
                        </AccordionTitle>
                        <AccordionBody>
                          <p
                            style={{
                              whiteSpace: 'pre-line',
                              fontSize: '15px',
                              color: '#496b96',
                              marginBottom: '0',
                              marginTop: '0',
                              lineHeight: '1.75'
                            }}
                          >
                            {faqItem.answer}
                          </p>
                        </AccordionBody>
                      </Fragment>
                    </AccordionItem>
                  ))}
                </>
              </Fragment>
            </Accordion>
          ) : (
            <Box style={{ textAlign: 'center', width: '100%' }}>
              <Loader
                className="loader"
                width="150px"
                height="150px"
                loaderColor="white"
              />
            </Box>
          )}
        </Box>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '20px'
          }}
        >
          <Button
            className="faqButton"
            title="VOUS AVEZ ENCORE DES QUESTIONS ?"
            {...btnStyle}
            onClick={() => navigate('/faq')}
          />
        </div>
      </Container>
    </FaqSectionWrapper>
  );
};

// FaqSection style props
FaqSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object
};

// FaqSection default style
FaqSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['40px', '56px']
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#ff4362',
    mb: '12px'
  },
  // section title default style
  sectionTitle: {
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
    width: '500px',
    maxWidth: '100%'
  },
  // accordion title default style
  titleStyle: {
    fontSize: ['16px', '17px'],
    fontWeight: '400',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: '0'
  },
  // accordion description default style
  descriptionStyle: {
    fontSize: '15px',
    color: '#496b96',
    lineHeight: '1.75',
    mb: '0'
  },
  btnStyle: {
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '500',
    textDecoration: 'none',
    textTransform: 'capitalize',
    padding: '8px 22px',
    transition: 'all 0.3s ease 0s',
    color: 'rgb(237, 205, 55)',
    border: '1px solid rgb(237, 205, 55)',
    backgroundColor: 'transparent',
    height: '48px',
    fontSize: '14px',
    borderRadius: '4px'
  }
};

export default FaqSection;
