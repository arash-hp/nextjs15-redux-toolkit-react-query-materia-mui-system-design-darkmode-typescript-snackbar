'use client';
import componentsOverride from '@/theme/overrides';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider as MuiThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import React, { createContext, useState } from 'react';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { SupportedLocales, ThemeContextTypes } from './types';
import { GlobalStyles, palette, PaletteOptions, shadowsTheme, typography } from '@/theme';

export const ThemeContext = createContext({} as ThemeContextTypes);

export interface ThemeContextProviderProps {
  children: React.ReactNode;
}

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [mode, setMode] = useState<PaletteMode>('light');
  // const [locale, setLocale] = useState<SupportedLocales>(DEFAULT_LOCAL);

  const themingUpdate: ThemeContextTypes = {
    toggleColorMode: (): void => {
      setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    toggleLocalLang: (lang: SupportedLocales): void => {
      // setLocale(lang);
    },
    mode: mode,
  };

  const theme = () =>
    createTheme(
      {
        palette: palette(mode),
        typography,
        shadows: shadowsTheme(palette(mode) as PaletteOptions),
        components: componentsOverride,
      }
      // locales[locale]
    );

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeContext.Provider value={themingUpdate}>
        <CacheProvider value={cacheRtl}>
          <CssBaseline />
          <GlobalStyles />
          <MuiThemeProvider theme={theme()}>{children}</MuiThemeProvider>
        </CacheProvider>
      </ThemeContext.Provider>
    </StyledEngineProvider>
  );
};

export default ThemeContextProvider;
export const useColorModeContext = () => React.useContext(ThemeContext);
