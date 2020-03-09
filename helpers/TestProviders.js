import React from 'react';
import { ThemeProvider } from 'styled-components'
import theme from '../constants/theme';

const TestProviders = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default TestProviders;
