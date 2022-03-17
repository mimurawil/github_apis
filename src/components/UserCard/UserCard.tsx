import { Avatar, Box, Link as MuiLink } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchGitHubUserApi } from '../../apis/gitHubApi';
import { GitHubSearchUser } from '../../apis/interfaces/GitHubSearchUser';
import { GitHubUser } from '../../apis/interfaces/GitHubUser';
import { Body1, Body2 } from '../Typography/Typography';

const UserDetailedInfo: React.FC<{ user: GitHubUser }> = ({ user }) => {
  let generalInfo = '';
  if (user?.followers) {
    generalInfo += `followers: ${user.followers}`;
  }
  if (user?.following) {
    generalInfo += generalInfo && ` | `;
    generalInfo += `following: ${user.following}`;
  }

  if (user?.public_repos) {
    generalInfo += generalInfo && ` | `;
    generalInfo += `public repos: ${user.public_repos}`;
  }

  return (
    <>
      <Body2>{user?.bio}</Body2>
      <Body2>{user?.location}</Body2>
      <Body2>{generalInfo}</Body2>
    </>
  );
};

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
          {user && <UserDetailedInfo user={user} />}
        </Box>
      </Box>
    </>
  );
};
