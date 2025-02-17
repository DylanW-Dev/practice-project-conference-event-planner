import { createSlice } from "@reduxjs/toolkit";

export const mealSlice = createSlice({
  name: 'meals',
  initialState: [

  ] ,
  reducers: {
    toggleMealSelection: (state, action) => {

    },
  },
});

export const { toggleMealSelection } = mealSlice.actions;

export default mealSlice.reducer;