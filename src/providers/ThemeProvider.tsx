"use client";
import { themeOptions } from "@/theme/theme";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme({
    ...themeOptions,
  });

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  return (
    <CacheProvider value={cacheRtl}>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </CacheProvider>
  );
};

export default ThemeProvider;
