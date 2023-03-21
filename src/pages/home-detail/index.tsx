import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { getBlogDetail } from '@/api/blogApi'

import { RootState } from '@/stores'
import { UrlConstants } from '@/constants/UrlConstants';
import "@/assets/scss/index.scss"

const HomeDetail = (props: any) => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const { blogDetail } = useSelector((state: RootState) => state.listBlogs)
  console.log('blogDetail', blogDetail)

  const fetchBlogDetail = async () => {
    try {
      const response = await getBlogDetail(id || 65)
      // if (response?.data) dispatch(response.data)
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
        <h5 >{ }</h5>
      </div>
    </>
  )
}

export default HomeDetail
