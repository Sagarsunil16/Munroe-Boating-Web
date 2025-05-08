import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.layer.css';
import '@mantine/dates/styles.layer.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import App from './App.jsx';
import { Toaster } from 'react-hot-toast';

// Minimal Mantine theme
const theme = createTheme({
  colors: {
    teal: [
      '#F0FDFA',
      '#CCFBF1',
      '#99F6E4',
      '#5EEAD4',
      '#2DD4BF',
      '#0D9488', // Custom teal
      '#0B8278',
      '#087264',
      '#05514D',
      '#032F2D',
    ],
  },
  primaryColor: 'teal',
  components: {
    Button: { defaultProps: { color: 'teal', radius: 'md' } },
    Input: { defaultProps: { radius: 'md' } },
    Select: { defaultProps: { radius: 'md' } },
    DatePicker: { defaultProps: { radius: 'md' } },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
    <MantineProvider theme={theme} cssVariablesSelector=":root">
      <App />
    </MantineProvider>
  </StrictMode>
);