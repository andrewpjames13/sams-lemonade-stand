import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/GlobalStyles';

const theme = {
  colors: {
    primary: '#fadd2d',
    secondary: '#1e853e',
  },
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
