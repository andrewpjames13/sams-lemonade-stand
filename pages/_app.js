import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import Head from 'next/head';
import GlobalStyles from 'styles/GlobalStyles';
import theme from '../constants/theme';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" type="text/css" />
        </Head>
        <ThemeProvider theme={theme}>
          <Reset />
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    )
  }
}
