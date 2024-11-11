import * as React from 'react';
import { PaletteMode } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { DarkModeIcon, LightModeIcon } from '@/components';

interface ToggleColorModeProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

function ToggleColorMode({ mode, toggleColorMode }: ToggleColorModeProps) {
  return (
    <Box sx={{ maxWidth: '32px' }}>
      <Button
        variant="text"
        onClick={toggleColorMode}
        size="small"
        aria-label="button to toggle theme"
        sx={{ minWidth: '32px', height: '32px', p: '4px' }}
      >
        {mode === 'dark' ? (
          <LightModeIcon color="warning" fontSize="medium" />
        ) : (
          <DarkModeIcon color="warning" fontSize="medium" />
        )}
      </Button>
    </Box>
  );
}

export default ToggleColorMode;
