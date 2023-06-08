const {configureStore} = require('@reduxjs/toolkit');

import ProductReducer from '../redux/slices/ProductSlice';
export const store = configureStore({
  reducer:{
    product : ProductReducer,
  },
});