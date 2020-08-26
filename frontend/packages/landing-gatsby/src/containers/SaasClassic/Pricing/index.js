import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Box from '../../../../../common/src/components/Box';
import Text from '../../../../../common/src/components/Text';
import Heading from '../../../../../common/src/components/Heading';
import Button from '../../../../../common/src/components/Button';
import Container from '../../../../../common/src/components/UI/Container';
import PricingTable, {
  PricingHead,
  PricingPrice,
  PricingButton,
  PricingList,
  ListItem,
  PricingButtonWrapper,
  PricingTableWrapper
} from './pricing.style';
import { Icon } from 'react-icons-kit';
import { check } from 'react-icons-kit/fa/check';
import { LightboxContext } from 'common/src/contexts/LightboxContext';
import axios from 'common/src/axios';
import Loader from 'common/src/components/Loader';

const PricingSection = ({
  sectionWrapper,
  secTitleWrapper,
  secHeading,
  secText,
  nameStyle,
  descriptionStyle,
  priceStyle,
  priceLabelStyle,
  buttonFillStyle,
  listContentStyle,
  wrapper,
  rightSide
}) => {
  const Data = useStaticQuery(graphql`
    query {
      saasClassicJson {
        MONTHLY_PRICING_TABLE {
          name
          description
          price
          priceLabel
          buttonLabel
          url
          trialButtonLabel
          trialURL
        }
      }
    }
  `);

  const [state, setState] = useState({
    data: Data.saasClassicJson.MONTHLY_PRICING_TABLE,
    active: true
  });
  const [price, setPrice] = useState(0);

  const { handleLightbox } = React.useContext(LightboxContext);

  React.useEffect(() => {
    axios
      .get('price')
      .then((res) => {
        setPrice(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const data = state.data;

  return (
    <Box {...sectionWrapper} id="pricing_section">
      <Container fullWidth>
        <Box {...secTitleWrapper}>
          <Text {...secText} content="PRICING PLAN" />
          <Heading
            {...secHeading}
            content="Choose your pricing policy which affordable"
          />
        </Box>
        <>
          {price === 0 ? (
            <div style={{ width: '100%', textAlign: 'center' }}>
              <Loader width="100px" height="100px" loaderColor="white" />
            </div>
          ) : (
            <PricingTableWrapper>
              <>
                {data.map((pricingTable, index) => (
                  <Box className="wrapper" {...wrapper}>
                    <PricingTable
                      freePlan={pricingTable.freePlan}
                      className="pricing_table"
                    >
                      <PricingHead>
                        <Heading content={pricingTable.name} {...nameStyle} />
                        <Text
                          content={pricingTable.description}
                          {...descriptionStyle}
                        />
                      </PricingHead>
                      <PricingPrice>
                        <Text content={`${price} €`} {...priceStyle} />
                        <Text
                          content={pricingTable.priceLabel}
                          {...priceLabelStyle}
                        />
                      </PricingPrice>
                      <PricingButton>
                        <a href={pricingTable.url}>
                          <Button
                            title={pricingTable.buttonLabel}
                            className="button"
                          />
                        </a>
                        {pricingTable.trialButtonLabel ? (
                          <a
                            className="trial_button"
                            href={pricingTable.trialURL || '#1'}
                          >
                            {pricingTable.trialButtonLabel}
                          </a>
                        ) : (
                          ''
                        )}
                      </PricingButton>
                    </PricingTable>
                    <Box className="rightSide" {...rightSide}>
                      <ul>
                        <li>
                          <Icon
                            key={`check-key`}
                            icon={check}
                            className="check"
                          />
                          No Credit Card information required (for FREE Trial)
                        </li>
                        <li>
                          <Icon
                            key={`check-key`}
                            icon={check}
                            className="check"
                          />
                          14-Day FREE Trial
                        </li>
                        <li>
                          <Icon
                            key={`check-key`}
                            icon={check}
                            className="check"
                          />
                          50 Free Credits for FREE Trial
                        </li>
                        <li>
                          <Icon
                            key={`check-key`}
                            icon={check}
                            className="check"
                          />
                          Free incoming Text Messages
                        </li>
                        <li>
                          <Icon
                            key={`check-key`}
                            icon={check}
                            className="check"
                          />
                          Unlimited Contacts
                        </li>
                        <li>
                          <Icon
                            key={`check-key`}
                            icon={check}
                            className="check"
                          />
                          24x7 Support{' '}
                        </li>
                        <li>
                          <Icon
                            key={`check-key`}
                            icon={check}
                            className="check"
                          />
                          Phone Number provided (only for Paid Subscribers)
                        </li>
                      </ul>
                      <Button
                        onClick={() => handleLightbox('signup')}
                        title="ACCÉDEZ MAINTENANT"
                        className="button"
                      />
                    </Box>
                  </Box>
                ))}
              </>
            </PricingTableWrapper>
          )}
        </>
      </Container>
    </Box>
  );
};

PricingSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  nameStyle: PropTypes.object,
  descriptionStyle: PropTypes.object,
  priceStyle: PropTypes.object,
  priceLabelStyle: PropTypes.object,
  listContentStyle: PropTypes.object,
  wrapper: PropTypes.object,
  rightSide: PropTypes.object
};

PricingSection.defaultProps = {
  wrapper: {
    display: 'flex'
  },
  rightSide: {
    color: 'white'
  },
  sectionWrapper: {
    as: 'section',
    pt: ['60px', '80px', '80px', '80px', '100px'],
    pb: '20px'
  },
  secTitleWrapper: {
    mb: ['30px', '40px']
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
    width: '500px',
    maxWidth: '100%'
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
    pr: '15px',
    pl: '15px'
  },
  nameStyle: {
    fontSize: ['20px', '20px', '22px', '22px', '22px'],
    fontWeight: '700',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    textAlign: 'center',
    mb: '12px'
  },
  descriptionStyle: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#6e7379',
    lineHeight: '1.75',
    textAlign: 'center',
    mb: '0'
  },
  priceStyle: {
    as: 'span',
    display: 'block',
    fontSize: ['36px', '36px', '40px', '40px', '40px'],
    color: '#0f2137',
    textAlign: 'center',
    mb: '5px',
    letterSpacing: '-0.025em',
    fontWeight: '500'
  },
  priceLabelStyle: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    color: '#6e7379',
    lineHeight: '1.75',
    textAlign: 'center',
    mb: '0'
  },
  buttonStyle: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '10px',
    pr: '10px',
    bg: '#fff',
    color: '#2aa275',
    colors: 'primaryWithBg',
    width: '222px',
    maxWidth: '100%'
  },
  buttonFillStyle: {
    type: 'button',
    fontSize: '15px',
    fontWeight: '700',
    color: 'white',
    borderRadius: '4px',
    pl: '10px',
    pr: '10px',
    colors: 'primaryWithBg',
    minWidth: ['160px', '190px'],
    maxWidth: '100%',
    height: '48px'
  },
  listContentStyle: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#6e7379',
    mb: '0'
  }
};

export default PricingSection;
