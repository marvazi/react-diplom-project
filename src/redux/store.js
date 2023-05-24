import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import cart from './slices/cartSlice';
import pizzaSlice from './slices/pizzasSlice';
import userSLice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    filterSlice,
    cart,
    pizzaSlice,
    user: userSLice,
  },
});
