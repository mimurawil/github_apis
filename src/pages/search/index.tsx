import { Box, Container } from '@mui/material';
import React from 'react';
import { MainContainer } from '../../components/Container/MainContainer';
import { LinkButton } from '../../components/Link/Link';
import { ThemeSwitcher } from '../../components/ThemeSwitcher/ThemeSwitcher';
import { Heading1, Heading2 } from '../../components/Typography/Typography';
import { useTitle } from '../../utils/useTitle';

const SearchPage: React.FC = () => {
  useTitle('Search');

  return (
    <MainContainer>
      <ThemeSwitcher />
      <Container>
        <Box mb={3}>
          <LinkButton to='/' text='Go back' />
        </Box>
        <Heading1>GitHub Search API</Heading1>
        <Heading2>User search</Heading2>
        <Box border={1} borderRadius='5px' p={3}>
          Search component placeholder
        </Box>
      </Container>
    </MainContainer>
  );
};

export default SearchPage;
