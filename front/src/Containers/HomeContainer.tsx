import { Grid2 } from '@mui/material';
import NavBar from '../Components/NavBar/NavBar.tsx';
import Items from '../Features/Items/Items.tsx';

const HomeContainer = () => {
  return (
    <Grid2 padding={5} spacing={10} container justifyContent="space-around" alignItems="center">
      <Grid2>
        <NavBar />
      </Grid2>
      <Grid2>
        <Items />
      </Grid2>
    </Grid2>
  );
};

export default HomeContainer;
