import React, { useCallback, useEffect, useState } from 'react'
import { debounce } from "lodash"

import { getBlogsList } from '@/api/blogApi'

import BlogItem from '@/components/Blogs/BlogItem'
import SearchInput from '@/components/Blogs/SearchInput'

const Home = () => {
  const [listBlogs, setListBlogs] = useState([])
  const [searchValue, setSearchValue] = useState("")

  const handleSearchAfterDebounce = debounce(async (value: string) => {
    await fetchListBlog(value)
  }, 500)

  const handleChangeSearchValue = useCallback((e: any) => {
    setSearchValue(e.target.value)
    handleSearchAfterDebounce(e.target.value)
  }, [])

  const fetchListBlog = async (val: string) => {
    try {
      const response = await getBlogsList({ search: val })
      if (response?.data) {
        setListBlogs(response.data)
      }
    } catch (error) {
      console.log('error :>> ', error);
    }
  }

  useEffect(() => {
    fetchListBlog("")
  }, [])

  return (
    <>
      <SearchInput onChange={handleChangeSearchValue} value={searchValue} />
      <ul className="list-unstyled">
        {listBlogs?.length > 0 ?
          listBlogs.map((item: any) => (
            <BlogItem key={item.id} title={item.title} content={item.content} image={item.image} />
          ))
          : ""}

      </ul>
    </>
  )
}

export default Home
