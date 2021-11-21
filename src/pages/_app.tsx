import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { UserProvider } from '../hooks/User';
import { GlobalStyle } from '../styles/global';
import { appTheme } from '../styles/theme';
import PortalsContainer from '../Components/Portal/PortalsContainer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <PortalsContainer>
        <ThemeProvider theme={appTheme}>
          <Component {...pageProps} />
          <GlobalStyle />
        </ThemeProvider>
      </PortalsContainer>
    </UserProvider>
  );
}
export default MyApp;
