const {configureStore} = require('@reduxjs/toolkit');

import ProductReducer from '../redux/slices/ProductSlice';
import WishlistReducer from '../redux/slices/WishlistSlice';
import CartReducer from '../redux/slices/CartSlice';
export const store = configureStore({
  reducer:{
    product : ProductReducer,
    wishlist: WishlistReducer,
    cart: CartReducer,
  },
});