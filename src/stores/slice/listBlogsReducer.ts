import { createSlice } from '@reduxjs/toolkit';
import { BlogData, BlogDataDetail, } from "@/interface/blog"


export type initialStateType = {
  blogLists: BlogData[],
  blogDetail: BlogDataDetail,
  loading: boolean,
}

const initialState: initialStateType = {
  blogLists: [],
  blogDetail: {
    body: {
      content: "",
      image: "",
      title: "",
    },
    content: "",
    createdAt: "",
    id: "",
    image: "",
    title: ""
  },
  loading: false,
}

export const listBlogsReducer = createSlice({
  name: 'listBlogs',
  initialState,
  reducers: {
    setListBlogs: (state, action) => {
      return {
        ...state,
        blogLists: action.payload
      };
    },
    setBlogDetail: (state, action) => {
      return {
        ...state,
        blogDetail: action.payload
      };
    },
    getBlogDetailById: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getBlogDetailByIdSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        blogDetail: action.payload
      };
    },
    getBlogDetailByIdFailure: (state) => {
      return {
        ...state,
        loading: false,
        blogDetail: new BlogDataDetail()
      };
    },
  },
});

export const listBlogsAction = listBlogsReducer.actions;

export const getListBlogsData = (state: any) => state.listBlogs.blogLists;

export const getBlogDetail = (state: any) => state.listBlogs.blogDetail;

export default listBlogsReducer.reducer;
