import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contactsSlice';
import filterSlice from './filterSlice';
import authSlice from './authSlice';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filter: filterSlice,
    auth: persistReducer(persistConfig, authSlice),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
