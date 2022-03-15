import { Typography } from '@mui/material';
import React from 'react';

export const Heading1: React.FC = ({ children }) => {
  return (
    <Typography variant='h3' component='h1' marginBottom={5}>
      {children}
    </Typography>
  );
};

export const Heading2: React.FC = ({ children }) => {
  return (
    <Typography variant='h4' component='h2' marginBottom={4}>
      {children}
    </Typography>
  );
};

export const Body1: React.FC<{ mb?: 'md' | 'lg' }> = ({ children, mb = 'md' }) => {
  let marginBottom = {};
  if (mb === 'lg') {
    marginBottom = { marginBottom: 3 };
  }
  return (
    <Typography variant='body1' gutterBottom fontSize={20} {...marginBottom}>
      {children}
    </Typography>
  );
};
