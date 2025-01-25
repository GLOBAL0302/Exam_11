import { ItemResponse } from '../../types';
import { createSlice } from '@reduxjs/toolkit';
import { addItemsThunk, fetchItemsThunk } from './ItemsThunk.ts';

interface ItemsState {
  items: ItemResponse[];
  fetchingItems: boolean;
  postingItems: boolean;
}

const initialState: ItemsState = {
  items: [],
  fetchingItems: false,
  postingItems: false,
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItemsThunk.pending, (state) => {
        state.fetchingItems = true;
      })
      .addCase(fetchItemsThunk.fulfilled, (state, { payload }) => {
        state.fetchingItems = false;
        state.items = payload;
      })
      .addCase(fetchItemsThunk.rejected, (state) => {
        state.fetchingItems = false;
      });

    builder
      .addCase(addItemsThunk.pending, (state) => {
        state.postingItems = true;
      })
      .addCase(addItemsThunk.fulfilled, (state) => {
        state.postingItems = false;
      })
      .addCase(addItemsThunk.rejected, (state) => {
        state.postingItems = false;
      });
  },
  selectors: {
    selectItems: (state) => state.items,
    selectFetchingItems: (state) => state.fetchingItems,
    selectPostingItems: (state) => state.postingItems,
  },
});

export const itemsReducer = itemsSlice.reducer;
export const {} = itemsSlice.actions;
export const { selectItems, selectPostingItems, selectFetchingItems } = itemsSlice.selectors;
