import { combineReducers } from 'redux'
import listBlogsReducer from '../slice/listBlogsReducer';

export const rootReducer = combineReducers({
  listBlogs: listBlogsReducer
})
