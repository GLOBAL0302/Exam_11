import { navBar } from '../../globalConstants.ts';
import { Grid2 } from '@mui/material';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Grid2 container flexDirection="column" spacing={3}>
      {navBar.map((item, index) => (
        <Button key={index} component={NavLink} to={`/:${item}`} type="button" variant="outlined">
          {item}
        </Button>
      ))}
    </Grid2>
  );
};

export default NavBar;
