import { SvgIcon, SvgIconProps } from '@mui/material';
import React, { FC } from 'react';

const CloseIcon: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 -960 960 960" {...props}>
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
    </SvgIcon>
  );
};

export default CloseIcon;
