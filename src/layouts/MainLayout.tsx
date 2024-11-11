'use client';
import { Grid2 } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

import { styles } from './styles';
import { Container } from '@/components';
import { AppBar } from './AppBar';
import { useColorModeContext } from '@/context/ThemeContextProvider/ThemeContextProvider';

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  const { toggleColorMode, mode } = useColorModeContext();

  return (
    <>
      <AppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Container>
        <Grid2 sx={styles.children}>{children}</Grid2>
      </Container>
    </>
  );
};

export default MainLayout;
