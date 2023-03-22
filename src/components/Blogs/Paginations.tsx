import React, { useMemo, useState } from 'react'

import "@/assets/scss/pagination.scss"

type Props = {
  page: number,
  limit: number,
  total: number,
  changePage: (page: number) => void
}

const Paginations = (props: Props) => {
  const { page = 1, limit = 10, total, changePage } = props
  const countPage = useMemo(() => Math.floor(total / limit), [total, limit]);

  const [currentPage, setCurrentPage] = useState(0)

  const changePageCurrent = (page: number) => {
    if (page < 0 || page > countPage - 1) return
    setCurrentPage(page)
    changePage(page + 1)
  }

  return (
    <nav>
      <ul className="pagination">
        <li
          className={`page-item ${currentPage > 0 ? "" : "disabled"}`}
          onClick={() => changePageCurrent(currentPage - 1)}
        >
          <span className="page-link">Previous</span>
        </li>
        {
          [...Array(countPage).keys()].map(item => (
            <li key={item}
              className={`page-item ${item === currentPage ? "active" : ""}`}
              aria-current="page"
              onClick={() => changePageCurrent(item)}
            >
              <span className="page-link">
                {item + 1}
              </span>
            </li>
          ))}
        <li
          className={`page-item ${currentPage >= countPage - 1 ? "disabled" : ""}`}
          onClick={() => changePageCurrent(currentPage + 1)}
        >
          <span className="page-link">Next</span>
        </li>
      </ul>
    </nav>
  )
}

export default Paginations