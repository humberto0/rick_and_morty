import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterProps } from './types';

const initialState: FilterProps = {
  nameFilter: '',
  statusFilter: '',
  page: 1,
  totalPages: 1,
};

const filterSlice = createSlice({
  name: '@filter',
  initialState,
  reducers: {
    addFilterName: (
      state,
      action: PayloadAction<FilterProps['nameFilter']>,
    ) => {
      if (state.nameFilter === action.payload) return;
      state.nameFilter = action.payload;
      state.page = 1;
    },

    addFilterStatus: (
      state,
      action: PayloadAction<FilterProps['statusFilter']>,
    ) => {
      if (state.statusFilter === action.payload) return;
      state.statusFilter = action.payload;
    },

    pageChange: (state, action: PayloadAction<FilterProps['page']>) => {
      state.page = action.payload;
    },

    setTotalPages: (
      state,
      action: PayloadAction<FilterProps['totalPages']>,
    ) => {
      state.totalPages = action.payload;
    },
  },
});

export const { addFilterName, addFilterStatus, pageChange, setTotalPages } =
  filterSlice.actions;

export default filterSlice.reducer;
