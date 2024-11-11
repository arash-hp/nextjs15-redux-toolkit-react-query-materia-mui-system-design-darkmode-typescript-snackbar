'use client';
import { Alert, IconButton, Slide, Snackbar } from '@mui/material';
import React from 'react';
import CloseIcon from '../icons/CloseIcon';
import { SnackbarContentProps, TransitionProps } from './types';

const SnackbarContent = ({ position, direction, duration, message, callback, severity = '' }: SnackbarContentProps) => {
  const closeSnackbar = React.useCallback(() => {
    callback();
  }, [callback]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const sliderTransition = React.useCallback(
    (props: TransitionProps) => {
      return <Slide {...props} direction={direction} />;
    },
    [direction]
  );

  return severity === '' ? (
    <Snackbar
      // TransitionComponent={sliderTransition}
      anchorOrigin={position}
      open={true}
      onClose={closeSnackbar}
      message={message}
      autoHideDuration={duration}
      action={
        <React.Fragment>
          <IconButton onClick={closeSnackbar}>
            <CloseIcon
              sx={{
                color: 'white',
              }}
            />
          </IconButton>
        </React.Fragment>
      }
    />
  ) : (
    <Snackbar
      // TransitionComponent={sliderTransition}
      anchorOrigin={position}
      open={true}
      onClose={closeSnackbar}
      message={message}
      autoHideDuration={duration}
    >
      {
        <Alert severity={severity} onClose={closeSnackbar}>
          {message}
        </Alert>
      }
    </Snackbar>
  );
};

SnackbarContent.displayName = 'SnackbarContent';
export default SnackbarContent;
