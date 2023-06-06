import {configureStore} from '@reduxjs/toolkit';
import productReducer from './slices/ProductSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export type  RootState = ReturnType<typeof store.getState>;
