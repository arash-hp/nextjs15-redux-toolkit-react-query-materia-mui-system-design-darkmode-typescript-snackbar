import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

const MenuIcon: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 -960 960 960" {...props}>
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
    </SvgIcon>
  );
};

export default MenuIcon;
