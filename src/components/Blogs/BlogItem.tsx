import React from 'react'

import "@/assets/scss/blogs.scss"

const BlogContent = (props: any) => {
  const { title, image, content } = props
  return (
    <li className="media mb-4 blogs-item">
      <img src={image} className="mr-3 blogs-item-image" alt={image} />
      <div className="media-body">
        <h5 className="mt-0 mb-1">{title}</h5>
        {content}
      </div>
    </li>
  )
}

export default BlogContent