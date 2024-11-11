'use client';

import { useSnackbarContext } from '@/providers/SnackbarProvider';
import { Button, Grid2, Typography } from '@mui/material';
import { NextPage } from 'next';

const Products: NextPage = () => {
  const { openSnackbar } = useSnackbarContext();

  return (
    <Grid2>
      <Typography>Products</Typography>
      <Button onClick={() => openSnackbar({ message: 'salam halet chetore', severity: 'success' })}>Snack-bar</Button>
    </Grid2>
  );
};

export default Products;
