import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { Modal } from '@redq/reuse-modal';
import { saasClassicTheme } from '../../../common/src/theme/saasClassic';
import Sticky from 'react-stickynode';
import { DrawerProvider } from '../../../common/src/contexts/DrawerContext';
import { ResetCSS } from '../../../common/src/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper
} from '../containers/SaasClassic/saasClassic.style';
import Navbar from '../containers/SaasClassic/Navbar';
// import '@redq/reuse-modal/es/index.css';
import '@redq/reuse-modal/lib/index.css';

import { LightboxProvider } from '../../../common/src/contexts/LightboxContext';

export default function Template({ children }) {
  return (
    <ThemeProvider theme={saasClassicTheme}>
      <LightboxProvider>
        <Fragment>
          <Modal />
          <ResetCSS />
          <GlobalStyle />

          <ContentWrapper>
            <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
              <DrawerProvider>
                <Navbar />
              </DrawerProvider>
            </Sticky>
            {children}
          </ContentWrapper>
        </Fragment>
      </LightboxProvider>
    </ThemeProvider>
  );
}
