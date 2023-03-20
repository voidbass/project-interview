import { createSlice } from '@reduxjs/toolkit';

// import { getDataList } from '@/api/listBlogs';

export const listBlogsReducer = createSlice({
  name: 'auth',
  initialState: {
    list: "",
  },
  reducers: {
  },
});

export const {
} = listBlogsReducer.actions;

export const getUserData = (state: any) => state.auth.user;
export default listBlogsReducer.reducer;
