import { Avatar, Box, Link as MuiLink } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchGitHubUserApi } from '../../apis/gitHubApi';
import { GitHubSearchUser } from '../../apis/interfaces/GitHubSearchUser';
import { GitHubUser } from '../../apis/interfaces/GitHubUser';
import { Body1, Body2 } from '../Typography/Typography';

interface UserCardProps {
  gitHubSearchUser: GitHubSearchUser;
}

export const UserCard: React.FC<UserCardProps> = ({ gitHubSearchUser }) => {
  const { login, avatar_url, html_url } = gitHubSearchUser;
  const [user, setUser] = useState<GitHubUser>(null);

  useEffect(() => {
    setUser(null);
    // this looks reasonably fast & consistent - I'll choose to not create a loading spinner here
    fetchGitHubUserApi(login).then((result) => setUser(result));
  }, [login]);

  return (
    <>
      <Box m={3} display='flex'>
        {avatar_url && (
          <Box mr={3}>
            <Avatar src={avatar_url} sx={{ width: 56, height: 56 }} />
          </Box>
        )}
        <Box>
          <Body1>
            {login} (
            <MuiLink href={html_url} target='_blank'>
              see in GitHub
            </MuiLink>
            )
          </Body1>
          <Body2>{user?.bio}</Body2>
          <Body2>hehe</Body2>
        </Box>
      </Box>
    </>
  );
};
