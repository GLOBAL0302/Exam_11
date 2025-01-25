import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from '../Features/Users/usersSlice.ts';
import { itemsReducer } from '../Features/Items/ItemsSlice.ts';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    items: itemsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
