import { Box, Container } from '@mui/material';
import React from 'react';
import { MainContainer } from '../../components/Container/MainContainer';
import { LinkButton } from '../../components/Link/Link';
import { ThemeSwitcher } from '../../components/ThemeSwitcher/ThemeSwitcher';
import { Body1, Heading1, Heading2 } from '../../components/Typography/Typography';

const HomePage: React.FC = () => {
  return (
    <MainContainer>
      <ThemeSwitcher />
      <Container>
        <Heading1>William T. Mimura</Heading1>
        <Heading2>Simple GitHub API exercise (JS)</Heading2>
        <Box mb={3}>
          <Body1 mb='lg'>Hello!</Body1>
          <Body1>
            This is a simple Javascript exercise that uses ReactJS (with some extra packages) and demonstrates a little
            bit how GitHub API works, specifically the search API (focused on the user search).
          </Body1>
          <Body1>This GH user search exercise complies with 4 main requirements:</Body1>
          <ul>
            <li>
              <Body1>Search user by text</Body1>
            </li>
            <li>
              <Body1>Pagination features (with total count)</Body1>
            </li>
            <li>
              <Body1>
                Display minimum information (user name/description, start/follower count, profile pictures, etc)
              </Body1>
            </li>
            <li>
              <Body1>Redirect user to the github.com page when clicking on an item in the result</Body1>
            </li>
          </ul>
        </Box>
        <Box>
          <LinkButton to='/search' text='Go to user search' />
        </Box>
      </Container>
    </MainContainer>
  );
};

export default HomePage;
