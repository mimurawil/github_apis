import { Button } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const StyledLink = styled(RouterLink)(({ theme }) => ({
  textDecoration: 'none',
  color: 'inherit',
}));

export interface LinkButtonProps {
  to: string;
  text: string;
}
export const LinkButton: React.FC<LinkButtonProps> = ({ text, to }) => {
  return (
    <Button variant='contained'>
      <StyledLink to={to}>{text}</StyledLink>
    </Button>
  );
};
