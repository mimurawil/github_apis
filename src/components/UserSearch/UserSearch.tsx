import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Loading } from '../Loading/Loading';
import { Error } from '../Typography/Typography';

export const UserSearchComponent: React.FC = () => {
  const {
    register,
    handleSubmit, // validates input before calling onSubmit
    formState: { errors },
  } = useForm();

  const onSubmit = (data: { searchText: string }) => {
    console.log('form submitted', data);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display='flex'>
          <Box flexGrow={1} mr={2}>
            <TextField
              variant='outlined'
              label='Search user'
              fullWidth
              {...register('searchText', { required: true })}
            />
          </Box>
          <Button type='submit' variant='outlined'>
            <SearchIcon /> Search
          </Button>
        </Box>
        {errors.searchText && <Error>This field is required</Error>}
      </form>

      <Box mt={3}>
        <Loading isLoading />
        Placeholder for results
      </Box>
    </Box>
  );
};
