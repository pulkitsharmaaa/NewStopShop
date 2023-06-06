import {createSlice} from '@reduxjs/toolkit';

interface ProductState {
  data: any | null;
  isLoading: boolean;
}

const initialState: ProductState = {
  data: null,
  isLoading: false,
};

const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {addProducts} = ProductSlice.actions;
export default ProductSlice.reducer;
