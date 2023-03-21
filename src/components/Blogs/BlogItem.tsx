import React from 'react'

import "@/assets/scss/blogs.scss"
import { useNavigate } from 'react-router-dom'
import { UrlConstants } from '@/constants/UrlConstants'

const BlogContent = (props: any) => {
  const navigate = useNavigate()
  const { title, image, content, id } = props

  const onClickDetail = () => {
    navigate(`${UrlConstants.HOME_PATH}/${id}`)
  }

  return (
    <span className='blogs-link' onClick={onClickDetail}>
      <li className="media mb-4 blogs-item">
        <img src={image} className="mr-3 blogs-item-image" alt={title} />
        <div className="media-body">
          <h5 className="mt-0 mb-1">{title}</h5>
          {content}
        </div>
      </li>
    </span>
  )
}

export default BlogContent