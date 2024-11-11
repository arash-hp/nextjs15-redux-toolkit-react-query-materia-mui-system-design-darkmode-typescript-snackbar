import { PaletteMode } from '@mui/material';
import * as locales from '@mui/material/locale';

export type SupportedLocales = keyof typeof locales;

export interface ThemeContextTypes {
  toggleColorMode: () => void;
  toggleLocalLang: (mode: SupportedLocales) => void;
  mode: PaletteMode;
}

export interface ThemeContextProviderProps {
  children: React.ReactNode;
}
