import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore, persistReducer } from 'redux-persist';
import { usersReducer } from '../Features/Users/usersSlice.ts';
import { itemsReducer } from '../Features/Items/ItemsSlice.ts';

const userPersistConfig = {
  key: 'store:users',
  storage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  users: persistReducer(userPersistConfig, usersReducer),
  items: itemsReducer,
});



export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
