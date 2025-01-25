import { ItemResponse } from '../../types';
import noPic from '../../assets/nopic2.png';
import { apiUrl } from '../../globalConstants.ts';
import { CardMedia, Grid2 } from '@mui/material';
import Typography from '@mui/material/Typography';

interface IProps {
  item: ItemResponse;
}

const Item: React.FC<IProps> = ({ item }) => {
  let item_Pic = noPic;
  if (item.image) {
    item_Pic = apiUrl + '/' + item.image;
  }

  return (
    <Grid2
      sx={{
        border: '2px solid black',
      }}
      padding={2}
      container
      flexDirection="column"
      alignItems="center"
    >
      <CardMedia title={item.title} component="img" style={{ width: '100px', height: '100px' }} image={item_Pic} />
      <Typography variant="subtitle1" component="p">
        {item.title}
      </Typography>
      <Typography variant="subtitle1" component="p">
        {item.price}
      </Typography>
    </Grid2>
  );
};

export default Item;
