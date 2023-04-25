import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterProps } from "./types";

const initialState: FilterProps = {
  nameFilter: "",
  statusFilter: "",
  page: 1,
};

const filterSlice = createSlice({
  name: "@filter",
  initialState,
  reducers: {
    addFilterName: (
      state,
      action: PayloadAction<FilterProps["nameFilter"]>,
    ) => {
      if (state.nameFilter === action.payload) return;
      state.nameFilter = action.payload;
    },

    addFilterStatus: (
      state,
      action: PayloadAction<FilterProps["statusFilter"]>,
    ) => {
      if (state.statusFilter === action.payload) return;
      state.statusFilter = action.payload;
    },

    addPage: (state, action: PayloadAction<FilterProps["page"]>) => {
      state.page = action.payload;
    },
  },
});

export const { addFilterName, addFilterStatus } = filterSlice.actions;

export default filterSlice.reducer;
