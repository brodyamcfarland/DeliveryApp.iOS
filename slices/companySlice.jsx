import { createSlice } from '@reduxjs/toolkit'

export const companySlice = createSlice({
  name: 'company',
  initialState: {
    company: {
        id: null,
        img: null,
        title: null,
        rating: null,
        genre: null,
        address: null,
        description: null,
        menuitems: null,
    },
  },
  reducers: {
    setCompany: (state, action) => {
        state.company = action.payload;
    },
  }
});

// Action creators are generated for each case reducer function
export const { setCompany } = companySlice.actions;

export const selectCompany = (state) => state.company.company;

export default companySlice.reducer;

