import { Button } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const StyledLink = styled(RouterLink)(({ theme }) => ({
  display: 'inline-block',
  padding: '6px 16px',
  textDecoration: 'none',
  color: 'inherit',
}));

export interface LinkButtonProps {
  to: string;
  text: string;
}
export const LinkButton: React.FC<LinkButtonProps> = ({ text, to }) => {
  return (
    <Button variant='contained' style={{ padding: 0 }}>
      <StyledLink to={to}>{text}</StyledLink>
    </Button>
  );
};
