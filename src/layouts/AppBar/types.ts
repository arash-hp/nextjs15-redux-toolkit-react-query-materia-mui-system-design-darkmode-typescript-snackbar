import { PaletteMode } from '@mui/material';

export interface AppAppBarType {
  mode: PaletteMode;
  toggleColorMode: () => void;
}
