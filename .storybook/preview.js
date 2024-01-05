/** @type { import('@storybook/react').Preview } */
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '../src/theme';
import { useMemo } from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';

import { withThemeFromJSXProvider } from '@storybook/addon-styling';

/* TODO: update import for your custom Material UI themes */
// import { lightTheme, darkTheme } from '../path/to/themes';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const withMuiTheme = (Story, context) => {
  let niprTheme = theme('light')

  return (
    <ThemeProvider theme={niprTheme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
};

// export const globalTypes = {
//   theme: {
//     name: 'Theme',
//     title: 'Theme',
//     description: 'Theme for your components',
//     defaultValue: 'default',
//     toolbar: {
//       icon: 'paintbrush',
//       dynamicTitle: true,
//       items: [
//         { value: 'default', left: '☀️', title: 'Default Theme' },
//         // { value: "dark", left: "🌙", title: "Dark mode" },
//       ],
//     },
//   },
// };

// const preview = {
//   parameters: {
//     actions: { argTypesRegex: '^on[A-Z].*' },
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/,
//       },
//     },
//   },
// };

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  withMuiTheme, // Adds global styles and theme switching support.
  withThemeFromJSXProvider({
    GlobalStyles: CssBaseline,
    // Uncomment for theme switching
    // Provider: ThemeProvider,
    // themes: {
    // Provide your custom themes here
    //   light: lightTheme,
    //   dark: darkTheme,
    // },
    // defaultTheme: 'light',
  }),
];
// export default preview;
