import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Divider, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { fetchGitHubSearchUserApi } from '../../apis/gitHubApi';
import { GitHubSearchResult } from '../../apis/interfaces/GitHubSearchResult';
import { Loading } from '../Loading/Loading';
import { Error } from '../Typography/Typography';
import { UserCard } from '../UserCard/UserCard';

export const UserSearchComponent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>(null);
  const [searchResult, setSearchResult] = useState<GitHubSearchResult>(null);
  const {
    register,
    handleSubmit, // validates input before calling the handler
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setIsLoading(false);
    setSearchResult(null);
    setError(null);
  }, []);

  const onSubmit = async (data: { searchText: string }) => {
    setIsLoading(true);
    setSearchResult(null);
    setError(null);
    try {
      const result = await fetchGitHubSearchUserApi(data.searchText);
      setSearchResult(result);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display='flex'>
          <Box flexGrow={1} mr={2}>
            <TextField variant='outlined' label='Search' fullWidth {...register('searchText', { required: true })} />
          </Box>
          <Button type='submit' variant='outlined'>
            <SearchIcon /> Search
          </Button>
        </Box>
        {errors.searchText && <Error>This field is required</Error>}
      </form>

      <Box mt={3} pt={3}>
        <Loading isLoading={isLoading} error={error} />
        {searchResult?.items?.map((item, idx) => (
          <React.Fragment key={idx}>
            {idx !== 0 && <Divider />}
            <UserCard gitHubSearchUser={item} />
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};
