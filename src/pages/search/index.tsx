import { Box, Container } from '@mui/material';
import React from 'react';
import { MainContainer } from '../../components/Container/MainContainer';
import { LinkButton } from '../../components/Link/Link';
import { ThemeSwitcher } from '../../components/ThemeSwitcher/ThemeSwitcher';
import { Body1, Heading1, Heading2 } from '../../components/Typography/Typography';
import { useTitle } from '../../utils/useTitle';

const SearchPage: React.FC = () => {
  useTitle('Search');

  return (
    <MainContainer>
      <ThemeSwitcher />
      <Container>
        <Heading1>GitHub Search API</Heading1>
        <Box mt={3} mb={3}>
          <LinkButton to='/' text='Go back' />
        </Box>
        <Heading2>User search</Heading2>
        <Body1>Hehe :)</Body1>
      </Container>
    </MainContainer>
  );
};

export default SearchPage;
