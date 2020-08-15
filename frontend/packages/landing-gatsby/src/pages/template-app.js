import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
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
// import 'bootstrap/dist/css/bootstrap.min.css';

import { LightboxProvider } from '../../../common/src/contexts/LightboxContext';
import AuthContextProvider from '../../../common/src/contexts/AuthContext';
import Lightbox from '../../../common/src/components/Lightbox';

export default function Template({ children }) {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={saasClassicTheme}>
        <LightboxProvider>
          <Fragment>
            <ResetCSS />
            <GlobalStyle
              inApp={/^\/app/.test(
                typeof window !== 'undefined' && window.location.pathname
              )}
            />

            <ContentWrapper>
              <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
                <DrawerProvider>
                  <Navbar />
                </DrawerProvider>
              </Sticky>

              <Lightbox />
              {children}
            </ContentWrapper>
          </Fragment>
        </LightboxProvider>
      </ThemeProvider>
    </AuthContextProvider>
  );
}
