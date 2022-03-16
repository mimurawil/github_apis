import LoopIcon from '@mui/icons-material/Loop';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/system';
import { Body1 } from '../Typography/Typography';
import { useTheme } from '@mui/material/styles';

const StyledLoopIcon = styled(LoopIcon)({
  fontSize: '5rem',
  animation: 'LoaderSpin infinite 1s linear',
  '@keyframes LoaderSpin': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(-180deg)',
    },
  },
});

interface LoadingProps {
  isLoading?: boolean;
  error?: string;
}

export const Loading: React.FC<LoadingProps> = ({ isLoading, error }) => {
  const theme = useTheme();
  if (error) {
    return (
      <Typography variant='h6' component='p' color={theme.palette.error.main}>
        {error}
      </Typography>
    );
  }

  if (!isLoading) {
    return null;
  }

  return (
    <Box my={3} display='flex' flexDirection='column' alignItems='center'>
      <StyledLoopIcon />
      <Body1>Loading...</Body1>
    </Box>
  );
};
