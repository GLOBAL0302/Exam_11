import { useState } from 'react';
import { Avatar, Container, Grid2, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { signUpUserThunk } from './usersThunk.ts';
import { selectRegisterError } from './usersSlice.ts';

const initialState = {
  username: '',
  password: '',
  display_name: '',
  phone_number: '',
};

const RegisterPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [userForm, setUserForm] = useState(initialState);
  const registerError = useAppSelector(selectRegisterError);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getFieldError = (fieldName: string) => {
    try {
      return registerError?.errors[fieldName].message;
    } catch {
      return undefined;
    }
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await dispatch(signUpUserThunk(userForm)).unwrap();
      navigate('/');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ p: 1, bgcolor: 'secondary.main', size: 'large' }}>
            <LockPersonIcon fontSize="large" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid2 container direction={'column'} size={12} spacing={2}>
              <Grid2 size={12}>
                <TextField
                  onChange={handleChange}
                  value={userForm.username}
                  name="username"
                  fullWidth
                  id="username"
                  label="Username"
                  error={Boolean(getFieldError('username'))}
                  helperText={getFieldError('username')}
                />
              </Grid2>
              <Grid2 size={12}>
                <TextField
                  onChange={handleChange}
                  fullWidth
                  value={userForm.password}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  error={Boolean(getFieldError('password'))}
                  helperText={getFieldError('password')}
                />
              </Grid2>
              <Grid2 size={12}>
                <TextField
                  required
                  onChange={handleChange}
                  fullWidth
                  value={userForm.display_name}
                  name="display_name"
                  label="Name"
                  type="text"
                  id="display_name"
                  error={Boolean(getFieldError('display_name'))}
                  helperText={getFieldError('display_name')}
                />
              </Grid2>
              <Grid2 size={12}>
                <TextField
                  required
                  onChange={handleChange}
                  fullWidth
                  value={userForm.phone_number}
                  name="phone_number"
                  label="Phone number"
                  type="text"
                  id="phone_number"
                  error={Boolean(getFieldError('phone_number'))}
                  helperText={getFieldError('phone_number')}
                />
              </Grid2>
            </Grid2>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>
            <Grid2 container justifyContent="flex-end">
              <Grid2>
                <NavLink to={'/login'}>Already have an account? Sign in</NavLink>
              </Grid2>
            </Grid2>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default RegisterPage;
