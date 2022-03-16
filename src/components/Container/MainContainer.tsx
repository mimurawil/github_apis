import { Container } from '@mui/material';
import { styled } from '@mui/system';

export const MainContainer = styled(Container)(({ theme }) => ({
  width: '100%',
  maxWidth: '100%',
  minHeight: '100%',
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.default,
}));
