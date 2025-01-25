import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { selectItems } from './ItemsSlice.ts';
import { fetchItemsThunk } from './ItemsThunk.ts';
import Item from './Item.tsx';
import { Grid2 } from '@mui/material';

interface IProps {
  category_id: string;
}

const Items: React.FC<IProps> = ({ category_id }) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectItems);

  const fetchAllItem = useCallback(async () => {
    await dispatch(fetchItemsThunk(category_id));
  }, [category_id]);

  useEffect(() => {
    void fetchAllItem();
  }, [category_id, fetchAllItem]);

  return (
    <Grid2 overflow={'scroll'} container spacing={2}>
      {items.map((item) => (
        <Item key={item._id} item={item} />
      ))}
    </Grid2>
  );
};

export default Items;
