import { SnackbarOrigin, SlideProps, AlertColor } from '@mui/material';

export interface SnackbarContentProps {
  position: SnackbarOrigin;
  duration: number;
  message: string;
  callback: () => void;
  severity?: SnackbarContentSeverityType;
  direction: SlideProps['direction'];
}

export type TransitionProps = Omit<SlideProps, 'direction'>;
type SnackbarContentSeverityType = AlertColor | '';

export interface SnackbarContentInterface {
  severity?: SnackbarContentSeverityType;
  message: string;
}
