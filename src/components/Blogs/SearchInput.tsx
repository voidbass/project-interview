import React from 'react'

import '@/assets/scss/blogs.scss'

type Props = {
	onChange: (e: any) => void,
	value: string,
}

const SearchInput = (props: Props) => {
	const { onChange, value } = props
	return (
		<div className='blogs-search-input'>
			<input value={value} onChange={onChange} />
		</div>
	)
}

export default SearchInput
