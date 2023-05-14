import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import cart from './slices/cartSlice';
import pizzaSlice from './slices/pizzasSlice';

export const store = configureStore({
  reducer: {
    filterSlice,
    cart,
    pizzaSlice,
  },
});
