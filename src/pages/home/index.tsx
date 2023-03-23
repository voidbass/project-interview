import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from "lodash"

import { getBlogsList } from '@/api/blogApi'
import BlogItem from '@/components/Blogs/BlogItem'
import SearchInput from '@/components/Blogs/SearchInput'
import Paginations from '@/components/Blogs/Paginations';
import SelectOption from '@/components/Blogs/SelectOption';

import { RootState } from '@/stores'
import { listBlogsAction } from '@/stores/slice/listBlogsReducer';
import { Filter } from '@/interface/paginations';

import "@/assets/scss/index.scss"

type optionValue = {
  key: string,
  value: string,
}

const Home = () => {
  const dispatch = useDispatch()
  const optionSelectFilter = [
    {
      key: "id",
      value: "ID",
    },
    {
      key: "title",
      value: "Title",
    },
    {
      key: "content",
      value: "Content",
    },
    {
      key: "image",
      value: "Image",
    },
    {
      key: "createdAt",
      value: "Created At",
    },
  ]

  const optionSelectOrder = [
    {
      key: "asc",
      value: "Ascending",
    },
    {
      key: "desc",
      value: "Descending",
    },
  ]

  const [listBlogs, setListBlogs] = useState([])
  const [searchValue, setSearchValue] = useState("")

  const { filter, loadingBlogs } = useSelector((state: RootState) => state.listBlogs)
  const { page = 1, limit = 10 } = filter

  const fetchListBlog = useCallback(async (params: Filter) => {
    try {
      dispatch(listBlogsAction.setLoadingBlogs(true))
      dispatch(listBlogsAction.setBlogFilter(params))
      const response = await getBlogsList(params)
      if (response?.data) {
        setListBlogs(response.data)
      }
    } catch (error) {
      console.log('error :>> ', error);
    } finally {
      dispatch(listBlogsAction.setLoadingBlogs(false))
    }
  }, [filter, getBlogsList, listBlogsAction])

  const handleSearchAfterDebounce = debounce(async (value: string, params: Filter) => {
    await fetchListBlog({ ...params, search: value })
  }, 500)

  const handleChangeSearchValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    handleSearchAfterDebounce(e.target.value, filter)
  }, [filter])

  const changePage = useCallback(async (page: number) => {
    await fetchListBlog({ ...filter, page })
  }, [filter])

  const onChangeSelectFilter = useCallback(async (opt: optionValue) => {
    await fetchListBlog({ ...filter, sortBy: opt.key })
  }, [filter])

  const onChangeSelectOrder = useCallback(async (opt: optionValue) => {
    await fetchListBlog({ ...filter, order: opt.key })
  }, [filter])

  useEffect(() => {
    fetchListBlog(filter)
  }, [])

  return (
    <>
      {loadingBlogs ? <div className="spinner-border text-primary blogs-spinner-loading" role="status">
        <span className="sr-only"></span>
      </div> : ""}
      <div className='d-flex justify-content-between w-100'>
        <SearchInput onChangeInput={handleChangeSearchValue} value={searchValue} />
        <div className='d-flex'>
          <SelectOption name="blogs-filter" optionSelect={optionSelectFilter} onChangeSelect={onChangeSelectFilter} />
          <SelectOption name="blogs-order" optionSelect={optionSelectOrder} onChangeSelect={onChangeSelectOrder} />
        </div>
      </div>
      <ul className={`list-unstyled ${loadingBlogs ? "loading-disabled" : ""}`}>
        {listBlogs?.length > 0 ?
          listBlogs.map((item: any) => (
            <BlogItem id={item.id} key={item.id} title={item.title} content={item.content} image={item.image} />
          ))
          : ""}
      </ul>

      <Paginations page={page} limit={limit} total={100} changePage={changePage} />
    </>
  )
}

export default Home
