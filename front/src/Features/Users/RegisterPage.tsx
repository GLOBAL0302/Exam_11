import { useState } from 'react';
import { Avatar, Container, Grid2, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import LockPersonIcon from '@mui/icons-material/LockPerson';

const initialState = {
  username: '',
  password: '',
};

const RegisterPage = () => {
  const [userForm, setUserForm] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
    } catch (e) {
      console.log(e);
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
