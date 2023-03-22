import React, { useState } from 'react'

import '@/assets/scss/blogs.scss'

interface OptionSelect {
  key: string,
  value: string,
}

type Props = {
  name: string,
  optionSelect: OptionSelect[]
  onChangeSelect: (e: OptionSelect) => void,
}

const SearchInput = (props: Props) => {
  const { onChangeSelect, name, optionSelect } = props

  const changeSelected = (opt: any) => {
    const indexOption = optionSelect.findIndex(el => el.key === opt.target.value)
    onChangeSelect(optionSelect[indexOption])
  }

  return (
    <div className='blogs-search-input'>
      <select id={name} onChange={changeSelected}>
        {optionSelect.map(el => (
          <option
            key={el.key}
            value={el.key}
          >
            {el.value}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SearchInput
