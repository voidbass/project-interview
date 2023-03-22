import React from 'react'

import '@/assets/scss/blogs.scss'

type Props = {
	onChangeInput: (e: any) => void,
	value: string,
}

const SearchInput = (props: Props) => {
	const { onChangeInput, value } = props
	return (
		<div className='blogs-search-input'>
			<input value={value} onChange={onChangeInput} placeholder="Searching..." />
		</div>
	)
}

export default SearchInput
