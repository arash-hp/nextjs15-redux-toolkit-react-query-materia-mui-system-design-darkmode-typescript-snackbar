"use client";
import { Grid2 } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import ResponsiveAppBar from "./ResponsiveAppBar/ResponsiveAppBar";
import Container from "./Container";
import { styles } from "./styles";

const AppBar: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ResponsiveAppBar />
      <Container>
        <Grid2 sx={styles.children}>{children}</Grid2>
      </Container>
    </>
  );
};

export default AppBar;
