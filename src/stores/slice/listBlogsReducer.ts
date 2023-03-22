import { createSlice } from '@reduxjs/toolkit';
import { BlogDataBodyDetail, BlogDataDetail } from "@/interface/blog"
import { Filter, FilterClass } from '@/interface/paginations';


export type initialStateType = {
  blogLists: Array<BlogDataBodyDetail>,
  blogDetail: BlogDataDetail,
  filter: Filter,
  loadingBlogs: boolean,
  loadingDetail: boolean,
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
    title: "",
  },
  filter: {
    limit: 10,
    page: 1,
    search: '',
    sortBy: 'id',
    order: 'asc',
  },
  loadingBlogs: false,
  loadingDetail: false,
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
    setBlogFilter: (state, action) => {
      return {
        ...state,
        filter: { ...state.filter, ...action.payload }
      };
    },
    setLoadingBlogs: (state, action) => {
      return {
        ...state,
        loadingBlogs: action.payload
      };
    },
    getBlogDetailById: (state) => {
      return {
        ...state,
        loadingDetail: true,
      };
    },
    getBlogDetailByIdSuccess: (state, action) => {
      return {
        ...state,
        loadingDetail: false,
        blogDetail: action.payload
      };
    },
    getBlogDetailByIdFailure: (state) => {
      return {
        ...state,
        loadingDetail: false,
        blogDetail: new BlogDataDetail()
      };
    },
  },
});

export const listBlogsAction = listBlogsReducer.actions;

export const getListBlogsData = (state: any) => state.listBlogs.blogLists;

export const getBlogDetail = (state: any) => state.listBlogs.blogDetail;

export const getBlogsFilter = (state: any) => state.listBlogs.filter;

export default listBlogsReducer.reducer;
