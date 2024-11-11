"use client";
import { Grid2 } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import AppBar from "./ResponsiveAppBar/ResponsiveAppBar";
import Container from "./Container";
import { styles } from "./styles";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <AppBar />
      <Container>
        <Grid2 sx={styles.children}>{children}</Grid2>
      </Container>
    </>
  );
};

export default MainLayout;
