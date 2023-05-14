import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async (parms) => {
    const { currentPage, categoryId, sortType } = parms;
    const { data } = await axios.get(
      `https://63f7d02173bce6c4497652d6.mockapi.io/items-pizzas?page=${currentPage}&limit=4&${
        categoryId > 0 ? `category=${categoryId}` : ''
      }$&sortBy=${sortType.sort}&order=desc`
    );
    return data;
  }
);

const initialState = {
  items: [],
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
  },
});
export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
