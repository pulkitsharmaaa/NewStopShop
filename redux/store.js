const {configureStore} = require('@reduxjs/toolkit');

import ProductReducer from '../redux/slices/ProductSlice';
import WishlistReducer from '../redux/slices/WishlistSlice';
import CartReducer from '../redux/slices/CartSlice';
import AddressReducer from '../redux/slices/AddressSlice';
export const store = configureStore({
  reducer:{
    product : ProductReducer,
    wishlist: WishlistReducer,
    cart: CartReducer,
    address: AddressReducer, 
  },
});