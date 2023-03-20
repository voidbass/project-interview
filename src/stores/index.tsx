import { configureStore } from '@reduxjs/toolkit';
import listBlogsReducer from './slice/listBlogsReducer';

const store = configureStore({
  reducer: {
    auth: listBlogsReducer,
  },
});

export default store;
