import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './slices/basketSlice';
import companyReducer from './slices/companySlice';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    company: companyReducer,
  },
})