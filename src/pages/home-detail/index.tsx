import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { getBlogDetail } from '@/api/blogApi'

import { RootState } from '@/stores'
import { UrlConstants } from '@/constants/UrlConstants';
import { listBlogsAction } from '@/stores/slice/listBlogsReducer';
import { BlogDataDetail } from '@/interface/blog';
import "@/assets/scss/blogDetail.scss"

const HomeDetail = (props: any) => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const { blogDetail } = useSelector((state: RootState) => state.listBlogs)

  const fetchBlogDetail = async () => {
    try {
      const response = await getBlogDetail(id)
      if (response?.data) dispatch(listBlogsAction.setBlogDetail(new BlogDataDetail(response.data)))
    } catch (error) {
      console.log('error :>> ', error);
    }
  }

  useEffect(() => {
    if (id) fetchBlogDetail()
  }, [id])

  return (
    <>
      <Link to={UrlConstants.HOME_PATH}>
        Back to List Blogs
      </Link>
      <div className='blog-detail'>
        <h5 className='blog-detail-title'>{blogDetail.title}</h5>
        <img src={blogDetail.image} className='blog-detail-image' />
        <div className='blog-detail-content'>{blogDetail.content}</div>
      </div>
    </>
  )
}

export default HomeDetail
