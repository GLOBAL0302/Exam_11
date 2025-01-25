import { useAppDispatch } from '../../app/hooks.ts';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Grid2, TextField } from '@mui/material';
import FileInput from '../../Components/FileInput/FileInput.tsx';
import Button from '@mui/material/Button';
import { navBar } from '../../globalConstants.ts';
import { IPostItemMutation } from '../../types';
import { addItemsThunk } from './ItemsThunk.ts';

const initialState = {
  title: '',
  description: '',
  image: null,
  category: '',
  price: '',
};

const AddItems = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [itemForm, setItemForm] = useState<IPostItemMutation>(initialState);

  const onChangeItemForm = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setItemForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files) {
      setItemForm((prevState) => ({
        ...prevState,
        [name]: files[0] || null,
      }));
    }
  };

  const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(addItemsThunk(itemForm));
    navigate('/');
  };

  return (
    <Grid2 container gap={2} flexDirection="column" component="form" onSubmit={onSubmit}>
      <TextField
        required
        value={itemForm.title}
        label="Title"
        onChange={onChangeItemForm}
        id="title"
        name="title"
        variant="outlined"
        color="primary"
        fullWidth
      />
      <TextField
        required
        value={itemForm.description}
        label="Description"
        onChange={onChangeItemForm}
        id="description"
        name="description"
        variant="outlined"
        color="primary"
        fullWidth
      />
      <TextField
        required
        value={itemForm.price}
        label="Price"
        onChange={onChangeItemForm}
        id="price"
        name="price"
        variant="outlined"
        color="primary"
        fullWidth
      />
      <FileInput name="image" label="image" onGetFile={onChangeFile} />
      <Grid2>
        <select
          required
          value={itemForm.category}
          onChange={onChangeItemForm}
          name="category"
          id="category"
          style={{ width: '100%', padding: '10px', marginBottom: '5px' }}
        >
          <option disabled>Select Type</option>
          {navBar.map((item: string) => (
            <option key={item} value={item}>
              {item.toUpperCase()}
            </option>
          ))}
        </select>
      </Grid2>
      <Button type="submit" variant="contained" color="primary">
        Add News
      </Button>
    </Grid2>
  );
};

export default AddItems;
