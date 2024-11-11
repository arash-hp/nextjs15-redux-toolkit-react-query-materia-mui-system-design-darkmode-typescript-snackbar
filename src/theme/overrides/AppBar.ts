import { Theme, Components } from '@mui/material/styles';
import { AppBarProps } from '@mui/material/AppBar';
import { ToolbarProps } from '@mui/material/Toolbar';

const MuiAppBar: Components<Theme>['MuiAppBar'] = {
  styleOverrides: {
    root: ({ theme, ownerState }: { theme: Theme; ownerState: AppBarProps }) => ({
      backgroundColor: theme.palette.primary.main, // Example style
    }),
  },
};

const MuiToolbar: Components<Theme>['MuiToolbar'] = {
  styleOverrides: {
    root: ({ theme, ownerState }: { theme: Theme; ownerState: ToolbarProps }) => ({
      padding: theme.spacing(1, 2), // Example style
    }),
  },
};

const componentOverrides = { MuiAppBar, MuiToolbar };

export default componentOverrides;
