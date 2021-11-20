import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { UserProvider } from '../hooks/User';
import { GlobalStyle } from '../styles/global';
import { appTheme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ThemeProvider theme={appTheme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </UserProvider>
  );
}
export default MyApp;
