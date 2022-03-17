import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Divider, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { fetchGitHubSearchUserApi } from '../../apis/gitHubApi';
import { GitHubSearchResult } from '../../apis/interfaces/GitHubSearchResult';
import { Routes } from '../../routes/routesDefinition';
import { useQuery } from '../../utils/useQuery';
import { Loading } from '../Loading/Loading';
import { Body1, Error } from '../Typography/Typography';
import { UserCard } from '../UserCard/UserCard';

export const UserSearchComponent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>(null);
  const [searchResult, setSearchResult] = useState<GitHubSearchResult>(null);
  const navigate = useNavigate();
  const query = useQuery();
  const text = query.get('text');
  const qPage = query.get('page');
  const page = isNaN(Number(qPage)) || Number(qPage) <= 0 ? 1 : Number(qPage);
  const defaultSize = 5;

  const {
    register,
    handleSubmit, // validates input before calling the handler
    formState: { errors },
  } = useForm({ defaultValues: { searchText: text } });

  useEffect(() => {
    setIsLoading(false);
    setSearchResult(null);
    setError(null);
  }, []);

  useEffect(() => {
    if (text && page) {
      fetchData(text, Number(page));
    }
  }, [text, page]);

  const onSubmit = async (data: { searchText: string }) => {
    navigate(Routes.search.build({ text: data.searchText, page: 1 }));
  };

  const previousPage = () => {
    const p = page - 1;
    navigate(Routes.search.build({ text, page: p }));
  };

  const nextPage = () => {
    const p = page + 1;
    navigate(Routes.search.build({ text, page: p }));
  };

  const fetchData = async (text: string, page: number) => {
    setIsLoading(true);
    setSearchResult(null);
    setError(null);
    try {
      const result = await fetchGitHubSearchUserApi(text, page, defaultSize);
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
        {!!searchResult?.total_count && (
          <Box pb={3}>
            <Body1>
              {searchResult?.total_count?.toLocaleString()} users found - showing results from{' '}
              {((page - 1) * defaultSize + 1).toLocaleString()} to{' '}
              {Math.min(defaultSize * page, searchResult.total_count).toLocaleString()}
            </Body1>
          </Box>
        )}
        {!!searchResult && !searchResult?.total_count && <Body1>No results in this search.</Body1>}
        {searchResult?.items?.map((item, idx) => (
          <React.Fragment key={idx}>
            {idx !== 0 && <Divider />}
            <UserCard gitHubSearchUser={item} />
          </React.Fragment>
        ))}
        {!!searchResult && (
          <Box display='flex' justifyContent='center' pt={3}>
            <Button variant='contained' onClick={previousPage} disabled={page === 1} style={{ marginRight: '1rem' }}>
              Prev. page
            </Button>
            <Button variant='contained' onClick={nextPage} disabled={searchResult.total_count <= page * defaultSize}>
              Next page
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};
