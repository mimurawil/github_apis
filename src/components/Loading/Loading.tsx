import LoopIcon from '@mui/icons-material/Loop';
import { Box } from '@mui/material';
import React from 'react';
import { styled } from '@mui/system';
import { Body1 } from '../Typography/Typography';

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
  isLoading: boolean;
}

export const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
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
