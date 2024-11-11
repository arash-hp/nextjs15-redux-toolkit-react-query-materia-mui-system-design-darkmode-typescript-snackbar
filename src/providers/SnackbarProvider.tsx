'use client';
import React from 'react';
import { SnackbarOrigin } from '@mui/material';
import { SnackbarContentInterface } from '@/components/Snackbar/types';
import { SnackbarContent } from '@/components';

interface SnackbarContextInterface {
  openSnackbar: (snackbar: SnackbarContentInterface) => void;
}
export const SnackbarContext = React.createContext({} as SnackbarContextInterface);

export interface SnackbarProviderProps {
  children: React.ReactNode;
  duration?: number;
  position?: SnackbarOrigin;
}

const SnackbarProvider = ({
  children,
  duration = 6000,
  position = {
    vertical: 'bottom',
    horizontal: 'right',
  },
}: SnackbarProviderProps) => {
  const [snackbar, setSnackbar] = React.useState<SnackbarContentInterface>();

  const openSnackbar = React.useCallback(
    ({ message, severity = '' }: SnackbarContentInterface) => {
      setSnackbar({
        message: message,
        severity: severity,
      });
    },
    [snackbar]
  );

  const closeSnackbar = React.useCallback(() => {
    setSnackbar(undefined);
  }, []);

  return (
    <SnackbarContext.Provider value={{ openSnackbar }}>
      {snackbar && (
        <SnackbarContent
          direction={position?.horizontal === 'left' ? 'right' : 'left'}
          position={position}
          duration={duration}
          message={snackbar.message}
          severity={snackbar.severity}
          callback={closeSnackbar}
        />
      )}
      {children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
export const useSnackbarContext = () => React.useContext(SnackbarContext);
