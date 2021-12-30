import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../index';
import initialState from './initialState';

const slice = createSlice({
  name: 'someState',
  initialState,
  reducers: {
    setSomeData: (state, { payload }) => {
      state.someData = payload;
    },
  },
});

export const { setSomeData } = slice.actions;
export default slice.reducer;

export const selectSomeData = (state: RootState) => state.someState.someData;
