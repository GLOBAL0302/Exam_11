import { Grid2 } from '@mui/material';
import NavBar from '../Components/NavBar/NavBar.tsx';
import Items from '../Features/Items/Items.tsx';
import { useParams } from 'react-router-dom';

const HomeContainer = () => {
  const { category_id } = useParams();

  return (
    <Grid2 padding={5} spacing={10} container justifyContent="space-around" alignItems="center">
      <Grid2>
        <NavBar />
      </Grid2>
      <Grid2>{category_id ? <Items category_id={category_id} /> : <Items category_id={'/'} />}</Grid2>
    </Grid2>
  );
};

export default HomeContainer;
