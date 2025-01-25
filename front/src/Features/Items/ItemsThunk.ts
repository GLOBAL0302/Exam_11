import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi.ts';
import { IPostItemMutation, ItemResponse } from '../../types';
import { RootState } from '../../app/store.ts';

export const addItemsThunk = createAsyncThunk<void, IPostItemMutation, { state: RootState }>(
  'items/addItemThunk',
  async (newItem, { getState }) => {
    const token = getState().users.user?.token;
    const formData = new FormData();
    const keys = Object.keys(newItem) as (keyof IPostItemMutation)[];
    console.log(keys);
    keys.forEach((key) => {
      const value = newItem[key];
      if (value !== null) {
        formData.append(key, value);
      }
    });
    await axiosApi.post('/items', formData, { headers: { Authorization: token } });
  },
);

export const fetchItemsThunk = createAsyncThunk<ItemResponse[], string>(
  'items/fetchItemsThunk',
  async (category_id) => {
    let search = '';
    if (category_id == '/' || category_id == 'AllItems') {
      search = '/items';
    } else {
      search = `/items?category_id=${category_id}`;
    }
    const { data } = await axiosApi.get(search);
    return data;
  },
);
